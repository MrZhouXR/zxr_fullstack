import apiLogin from './interface/login'

const ins = Vue => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,

        )
      }
    }
  })
}

export default ins