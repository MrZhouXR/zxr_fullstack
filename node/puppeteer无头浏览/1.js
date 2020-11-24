const puppeteer = require('puppeteer')
const $ = require('cheerio')

async function run() {
  const browser = await  puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://juejin.cn/books ', {
    waitUntil: 'networkidle0'
  })

  // await page.screenshot({
  //   path: './juejin.png'
  // })

  // 在获取之前，执行几次 下拉动作
  await page.evaluate(function () {
    function req() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          document.querySelector('.copy-right').scrollIntoView()
          resolve()
        },2000)
      })
    }
    async function run () {
      for ( let i = 0 ;i < 3; i++) {
        await req()
      }
    }
    // ayync 执行完 返回就是 promise
    // run 这个promise 只有三次下拉加载结束才会resolve
    // page.evaluate 将等待promis 完成
    return run()
  })
  // 第一页数据
  const html = await page.content()
  const books = $('.info', html)
  let booksInfo = []
  books.each(function (item) {
    const book = $(this);
    let name = $(book.find('.title')).text().trim();
    let auth = $(book.find('.author-name')).text().trim();
    console.log(name,auth);
    booksInfo.push({
      name,auth
    })
  })
  const fs = require('fs')
  fs.writeFile('./books.json',JSON.stringify(booksInfo, null , 2 ), (err) => {
    if (!err) {
      console.log('success');
    } else {
      console.log('failed');
    }
  })
  await browser.close()
}
run()