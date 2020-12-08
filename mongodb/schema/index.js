const mongoose = require('mongoose')
// 将物理的数据存储转变成为一个 JSON 对象
// Schema 帮我们创建类，对数据库操作给与 API
// 只要看到 Schema 就相当于看到了表结构
const Schema = mongoose.Schema
const articleSchema = new Schema(
  {
    title: String,
    date: Date,
    content: String
  }
)
const linkSchema = new Schema(
  {
    name: String,
    href: String,
    newPage: Boolean
  }
)
const userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    emailCode: String,
    createTime: Number,
    articles: [articleSchema],
    links: [linkSchema]
  }
)

const User = mongoose.model('User', userSchema)

new User(
  {
    name: 'tmp',
    password: '0000',
    email: 'lixiaoxiao@139.com',
    emailCode: '12345',
    createTime: Date.now(),
    articles: [],
    links: []
  }
).save(function() {

})

mongoose.connect('mongodb://127.0.0.1:27017/test')
const db = mongoose.connection
db.on('error',function() {
  console.log('db,error');
})
db.once('open',function() {
  console.log('db opened');
})


