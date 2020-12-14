const Koa = require('koa')
const path = require('path')
const config = require('./config/default')
const views = require('koa-views')
const MysqlStore = require('koa-mysql-session')
const session = require('koa-session-minimal') // 帮助koa 开辟一个空间存储
const staticCache = require('koa-static-cache') // 配置静态资源
const bodyParser = require('koa-bodyparser') // 解析表单

const app = new Koa()

// session 存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,

}

// 配置session 中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))


// 配置服务端的模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(require('./routers/signin').routes())
app.use(require('./routers/signup').routes())


app.listen(config.port, () => {
  console.log('3000端口已启动');
})