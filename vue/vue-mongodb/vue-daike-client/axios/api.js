import axios from 'axios'
import config from './config.js'
import qs from 'qs' // 序列化请求数据，方便服务端操作
import { Toast } from 'vant';
import router from 'vue-router'

export default function $axios(options) {
  return new Promise((resolve,reject) => {
    // 创建一个接口请求
    const instance = axios.create({
      baseURL: config.baseURL,

    })

    // 请求拦截
    instance.interceptors.request.use(
      config => {
        if ( config.method.toLocaleUpperCase() === 'POST' || config.method.toLocaleUpperCase() === 'PUT' || config.method.toLocaleUpperCase() === 'DELETE') {
          // 序列化
          config.data = qs.stringify(config.data)
        }
        return config
      },
      error => {
        // 请求超时
        if ( error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          Toast.fail('请求超时');
        }
         // 重定向到错误页面
        const errorInfo = error.response
        if ( errorInfo ) {
          const errorStatus = errorInfo.status // 404
          router.push({
            path: `/error/${errorStatus}`
          })
        }
      }
     
    )

    // 响应拦截
    instance.interceptors.response.use(
      response => {
        let data ;
        if ( response.data == undefined ) {
          data = response.request.responseText
        } else {
          data = response.data
        }

        data = JSON.parse(data)
        const message = data.msg || 'Error'
        switch (data.code) {
          case 0: 
            Toast.fail({
              message,
              duration: 1000
            });
            return Promise.reject(message)
          default:
        }
        return data
      },
      error => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息

      }
    )
  
    //请求处理 
    instance(options)
      .then(res => {
        resolve(res)
        return false
      })
      .catch(error => {
        reject(error)
      })
  })
}
