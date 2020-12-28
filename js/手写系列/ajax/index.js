// let xhr = new XMLHttpRequest()
// // 初始化
// xhr.open(method, url, async)
// // 发送请求
// xhr.send()
// // 设置状态变化回调处理请求结果
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // 0 － （未初始化）还没有调用send()方法
//     // 1 － （载入）已调用send()方法，正在发送请求
//     // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
//     // 3 － （交互）正在解析响应内容
//     // 4 － （完成）响应内容解析完成，可以在客户端调用了
//     console.log(xhr.responseText);
//   }
// }

// 基于promise 实现 ajax
function ajax(options) {
  let url = options.url
  const method = options.method.toLowerCase() || 'get'
  const async = options.async
  const data = options.data


  let xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }
  return new Promise((resolve,reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 ) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }
    // 错误的回调
    xhr.onerror = err => reject && reject(err)

    // 处理请求
    let paramArr = []
    let encodeData;
    if (data instanceof Object) {
      for (let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    if (method === 'get') {
      const index = url.indexOf('?')
      if (index === -1) {
        url += '?'
      } else if (index !== url.length - 1) {
        url += '&'
      }
      url += encodeData
    }

    xhr.open(method, url, async)
    if (method === 'get') xhr.send(null)
    else {
      xhr.setRequestHeader('ContentType', 'application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }


  })
}

// ajax({
//   method: 'get',
//   url: '',
//   async: true,
//   data: {},
//   timeout: 10000
// })
