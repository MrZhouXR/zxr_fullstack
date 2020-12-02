const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify
const AipOcrClient = require('baidu-aip-sdk').ocr
const APP_ID = "23082457"
const API_KEY = "4zTA4qfUsty5L3n3WzZGVnkd"
const SECRET_KEY = "OBvtAm3urWuudL6C6ucpdUuY5SC5vA6o"

// sync  I/O  Async  sync同步
const image = fs.readFileSync('timg.jpg').toString("base64")
// console.log(image);
const options = {}
options["multi_detect"] = "true"

const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)


// http 协议  云端 AI sdk
client.licensePlate(image, options).then((result) => {
  console.log(result);
}).catch(err => {
  console.log(err);
})