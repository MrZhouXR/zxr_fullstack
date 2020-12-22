import apiLogin from './interface/login'
import apiRegister from './interface/register'

const ins = Vue => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          apiRegister
        )
      }
    }
  })
}

export default ins