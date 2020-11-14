const fs = require('fs')
const { exec } = require('child_process')
const http = require('http')
const server  = http.createServer((req , res ) => {
  // res.end('hello world')
  if (req.url === '/') {
    const files = []
    fs.readdirSync('./')
    .forEach(url => {
      files.push(`<a href="/${url}">${url}</a>`)
    })
    res.end(files.join('</br>'))
  }
  else {
    // 静态资源服务
    const exist = fs.existsSync('.' + req.url)
    if (!exist) {
      res.statusCode = 404
      res.end('404')
      return 
    }
    fs.readFile('.' + req.url, (err, file) => {
      if (!err) {
        const path = require('path')
        const extname = path.extname('.' + req.url)
        const map = {
          '.js': 'application/javascript;charset=utf-8',
          '.md': 'text/plain;charset=utf-8'
        }
        res.setHeader('Content-Type',`${map[extname]}`)
        res.end(file)
      }
    })
  }
})
server.listen(8080,() => {
  const url = `http://127.0.0.1:8080`
  if (process.platform === 'darwin')  {
    exec(`open ${url}`)
  } else {
    exec(`start ${url}`)
  }
})