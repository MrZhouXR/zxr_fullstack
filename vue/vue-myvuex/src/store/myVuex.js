let Vue

class Store{
  constructor(options) {
    // this.state = options.state || {}
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })
    // getters
    let getters = options.getters || {}
    this.getters = {}
    // 拿到options.getters 里面所有的key
    // 把所有的函数都添加到this.getters
    // 当取用某个函数的时候，可以之后拿函数名来用，不用打()
    // for(let key in getters) {
    //   this.getters.key = getters[key]
    // }
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state)
        }
      })
    })

    // mutation
    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = (arg) => {
        mutations[mutationName](this.state,arg)
      }
    })


    // actions
    let actions = options.actions || {}
    this.actions = {}
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = (arg) => {
        actions[actionName](this,arg)
      }
    })

    this.commit = (method, arg) => {
      this.mutations[method](arg)
    }

  }
  get state() {
    return this.vm.state
  }

  // commit (method,arg){
  //   this.mutations[method](arg)
  // }

  dispatch(method,arg) {
    this.actions[method](arg)
  }

}

let install = function (vue) {
  Vue = vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store,
  install
}
export default Vuex