const koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const fs = require('fs')

const app = new koa()


app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html','utf-8')
  })
)

// 
app.use(
  static(__dirname + '/source/')
)

app.listen(3000)

const user = {
  name: 'hh'
}

const result = `<h2>${user.name}</h2>`
const vm = require('vm')


const template = '<h2><%=user.name %></h2>'
ejs.render(template,user)

