// var playerAction = process.argv[process.argv - 1]
const game = require('./lib')

// const result = game(playerAction)
// console.log(result);

// 获取进程的标准输入
let count = 0
process.stdin.on('data',e => {
  const playerAction = e.toString().trim()// trim（）去除两端空格
  const result = game(playerAction)
  console.log(result)
  if (result == 1) {
    count++
  }
  if (count == 3 ) {
    console.log('human win');
    process.exit()
  }
})
