const http = require('http')
const fs = require('fs')
const { info } = require('console')

// 搭建一个 web 服务
var server = http.createServer(function( req , res ) {
  if (res.url != '/favicon.ico') {
    res.writeHead(200, {"Content-type": "text/html"}) // 响应头
    const myreadstream = fs.createReadStream(__dirname + '/views/index.html', 'utf-8') 
    myreadstream.pipe(res) // 往前端输出文件流
  }
})

var io = require('socket.io')(server)

io.on('connection' , function(socket) { // 声明一个 io 的使用
  console.info('con suc')
  socket.on('link to server', (msg) => {
    console.info(`我收到一个问题${msg}`)
    // 响应客户端
    io.emit('link to client', msg)
  })
})


server.listen(8080, () => {
  console.log('server is running');
})
