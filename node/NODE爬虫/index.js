// 加载https模块,只要有获取网站链接的操作，都需要
const https = require('https')
//加载cheerio
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250', (res) =>{
  let html = ""
  //res.on相当于addEventelistner
  res.on('data', (chunk) => {
    html += chunk
  })
  //监听数据加载完成，就执行需要的效果
  res.on('end', () => {
    // console.log(html)
    const $ = cheerio.load(html)
    //用一个数组来保存爬到的数据
    let allFilms = []
    //循环遍历将.item下的.title放进数组中
    $('li .item').each(function() {
      const title = $('.title',this).text()
      const url = $('.pic img',this).attr('src')
      const rate = $('.rating_num', this).text()


      allFilms.push({url,title,rate})
    })
    //将爬到的数据转为String类型再写入新建的文件中
    fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
      if(!err) 
        console.log('success')
    })
  })
})