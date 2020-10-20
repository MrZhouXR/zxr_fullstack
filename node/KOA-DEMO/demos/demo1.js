const Koa = require('koa')//导入koa

const app = new Koa()//创建koa实例
//启用服务
app.listen(3000, () => {
  console.log('success');
})