const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser  = require("koa-bodyparser");
const mongoose = require('mongoose') // 做 MongoDB 的连接
const config = require('./config')

// 建立mongodb 的连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.error('failed');
  } else {
    console.log('connecting database successfully');
  }
})

const app = new Koa()

const user_router = require('./routes/api/user_router')


app.use(cors()) // 解决跨域
app.use(bodyParser()) // 帮助koa解析参数
app.use(user_router.routes())

app.listen(3000);

