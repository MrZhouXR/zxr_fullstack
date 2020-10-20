const Koa = require('koa')//导入koa


const app = new Koa()

const main = (ctx) => {
  ctx.response.body = 'Hello,World'
}
app.use(main)
app.listen(3000, () => {
  console.log('success');
})