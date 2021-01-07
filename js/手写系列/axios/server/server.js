const express = require('express')
const app = express()

// 允许跨域访问服务
app.all('*',function(req,res,next) {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','Content-Type')
  res.header('Access-Control-Allow-Origin','*')
  res.header('Content-Type','application/json;charset=utf-8')
  next()
})

app.get('/getTest', function(req,res) {
  data = {
    name: '111',
    age: 20
  }
  res.json(data)
})

let server = app.listen(5000,function() {
  console.log('server start');
})