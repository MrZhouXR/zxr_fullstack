const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify
const APP_ID = "23082457"
const API_KEY = "4zTA4qfUsty5L3n3WzZGVnkd"
const SECRET_KEY = "OBvtAm3urWuudL6C6ucpdUuY5SC5vA6o"

// sync  I/O  Async  sync同步
const image = fs.readFileSync('car.jpg').toString("base64")
// console.log(image);

const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)

// http 协议  云端 AI sdk
client.carDetect(image).then((result) => {
  console.log(result.result[0]);
}).catch(err => {
  console.log(err);
})