const Koa = require('koa')//导入koa

const app = new Koa()//创建koa实例

const main = (ctx) => {
  if(ctx.request.accepts('xml')) {
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hello World</data>'
  }else if(ctx.request.accepts('html')){
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hello World</p>'
  }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json'
    ctx.response.body = '{Hello World}'
  }else{
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
  }
}

app.use(main)


//启用服务
app.listen(3000, () => {
  console.log('success');
})