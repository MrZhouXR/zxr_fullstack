// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise') // http模块
const cheerio = require('cheerio') 
let charset = require('superagent-charset') // 解决乱码
let superagent = require('superagent') // 发起请求
charset(superagent) 
cloud.init()  

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://wap.biqiuge8.com/"
  const result = await superagent.get(serverUrl).charset('gb2312') // 取决于网页的编码方式
  const data = result.text || '' 
  const $ = cheerio.load(result.text) // 读取整份html文件
  // 热门推荐
  let hotList = $('.hot').find('.image')
  let hotData = [] // 热榜
  for (let i = 0; i < hotList.length; i++) {
    let obj = {
      url: $(hotList[i]).find('a').attr('href'),
      imgurl: $(hotList[i]).find('img').attr('src'),
      name: $(hotList[i]).find('img').attr('alt'),
      author: $(hotList[i]).next().find('dt').find('span').text(),
      detail: $(hotList[i]).next().find('dd').text()
    }
    // obj['url'] = $(hotList[i]).find('a').attr('href')
    // obj['imgUrl'] = $(hotList[i]).find('img').attr('src')
    // obj['name'] = $(hotList[i]).find('img').attr('alt')
    // obj['author'] = $(hotList[i]).next().find('dt').find('span').text()
    // obj['detail'] = $(hotList[i]).next().find('dd').text()
    hotData.push(obj)

  }

  // 分类推荐
  let classifyData = [] // 分类
  let classifyList = $('.block')
  for (let i = 0; i < classifyList.length; i++ ) {
    let obj = {}
    let childData = []
    let childDom = $(classifyList[i]).find('.lis').find('li')
    for (let j = 0; j < childDom.length; j++) {
      let childObj = {
        name: $(childDom[j]).find('.s2').find('a').text(),
        url: $(childDom[j]).find('.s2').find('a').attr('href'),
        author: $(childDom[j]).find('.s3').text()
      }
      childData.push(childObj)
    }
    obj['classifyList'] = $(classifyList[i]).find('h2').text()
    obj['data'] = childData
    classifyData.push(obj)
  }


  return {
    hotData,
    classifyData
  }
}