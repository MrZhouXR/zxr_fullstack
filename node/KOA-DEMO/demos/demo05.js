const Koa = require('koa')
// const fs = require('fs')
const app = new Koa()

const main = ctx => {
  if (ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href = "/">index page</a>'
  } else {
    ctx.response.body = 'hello world'
  }
  
}


app.use(main)


app.listen(3000,() => {
  console.log('3000端口已启动');
})