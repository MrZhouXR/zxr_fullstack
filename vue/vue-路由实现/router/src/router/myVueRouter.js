let Vue = null

class HistoryRoute{
  constructor () {
    this.current = null
  }
}

class VueRouter{
  constructor(options) {
    this.mode = options.mode || 'hash',
    this.routes = options.routes || [],
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 当前路由的状态
    this.init()
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component
      return pre
    },{})
  }
  // 初始化
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
}



VueRouter.install = function(v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router
        // 响应式操作
        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root 
      }
      Object.defineProperty(this, '$router', {
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link',  {
    props: {
      to: String
    },
    render(h) { 
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs:{href:to}}, this.$slots.default)
    }
  })
  Vue.component('router-view',  {
    render(h) {
      let current = this._self._root._router.history.current
      let routesMap = this._self._root._router.routesMap
      return h(routesMap[current])
    }
  })
}

export default VueRouter

// Vue.use = function(plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if(installedPlugins.indexOf(plugin)) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if(typeof plugin.install === 'function') { // 判断是否是对象
//     plugin.install.apply(plugin,args)
//   } else if(typeof plugin === 'function') { // 判断是否是函数
//     plugin.apply(null, plugin, args) // 是的话就执行
//   }
//   installedPlugins.push(plugin)
//   return this
// }