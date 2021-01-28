const net = require('net')

const socket = new net.Socket({})

socket.connect({
  host: '127.0.0.1',
  port: 4000
})


// socket.write('connnect request')

const LESSON_IDS = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]

// 编码buffer数据流
let seq = 0
function encode(index) {
  let buffer = Buffer.alloc(6)
  buffer.writeInt16BE(seq++)
  // console.log(seq);
  buffer.writeInt32BE(LESSON_IDS[index],2)

  return buffer
}

let index = Math.floor(Math.random() * LESSON_IDS.length)

socket.write(encode(index))

// 接收到服务器往socket管道里面添加的内容
socket.on('data',(buffer) => {
  const seqBuffer = buffer.slice(0,2)
  const titleBuffer = buffer.slice(2)
  
  // console.log(buffer.toString());
  console.log(seqBuffer.readInt16BE(),titleBuffer.toString());
  index = Math.floor(Math.random() * LESSON_IDS.length)
  socket.write(encode(index))
  
})

// setInterval(() => {
//   index = Math.floor(Math.random() * LESSON_IDS.length)
//   socket.write(encode(index))
// }, 50);



