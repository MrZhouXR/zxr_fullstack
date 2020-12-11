const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = (ctx, next) => {
  ctx.body = 'hello'
}

app.use(main)

app.listen(3000)