import config from './config'//引入config 中的 core
import * as Mock from './mock'//引入多个用 * 

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments);
  },
  //alert(传参 或者 默认值)
  alert(title = '提示', content = config.defaultAlertMessage) {
    if(typeof content === 'object') {
      content = this.isDEV && JSON.stringify(content)
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  getStorageData(key,callback) {
    wx.getStorage({
      key: key,
      success (res) {
        callback && callback(res.data)
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  setStorageData(key,value='',callback) {
    wx.setStorage({
      key:"key",
      data:"value",
      success () {
        callback && callback()
      }
    })
  },
  request(opt) {
    let {url, data, header, method, dataType, mock = false } = opt//类似let url = opt.url
    let self = this
    return new Promise((resolve,request) => {
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        }
      } 
      else {
        wx.request({
          url: url, //仅为示例，并非真实的接口地址
          data: data,
          header: header || {'Content-Type': 'application/json'},
          method: method || 'GET',
          dataType: dataType || 'json',
          success (res) {
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail (err) {
            self.log(err)
            self.alert('提示', err)
            reject(err)
          }
        })
      }
    })
  }
}
export default util

