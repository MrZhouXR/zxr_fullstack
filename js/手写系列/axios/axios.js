// 拦截器
class InterceptorsMange {
  constructor() {
    this.handlers = []
  }
  use (fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}

class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsMange(),
      response: new InterceptorsMange()
    }
  }
  request(config) {
    // 拦截器和请求函数装进队列
    let chain = [
      // function(config) {return config}, function(error) {return Promise.reject(error)},
      this.sendAjax.bind(this), undefined,

    ]

    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })

    // 响应拦截
    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected)
    })

    // 执行队列，每次只执行一对
    let promise = Promise.resolve(config)
    while(chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  }
  sendAjax(config) {
    return new Promise(reslove => {
      const {url = '', method = '', data = {}} = config
      // 发请求
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.onload = function() {
        // console.log(xhr.responseText);
        reslove(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}

const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']
methodsArr.forEach(met => {
  Axios.prototype[met] = function() {
    if (['get', 'delete', 'head', 'options'].includes(met)) { // 2个参数
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else { // 3个参数
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
})

// 方法混入
const utils = {
  extend (a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        } else {
          a[key] = b[key]
        }
      }
    }
  }
}

function CreateAxiosFn() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  utils.extend(req, Axios.prototype, axios)
  utils.extend(req, axios)
  return req
}

let axios = CreateAxiosFn()

