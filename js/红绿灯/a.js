const fs = require('fs');
const { resolve } = require('path');

// fs.readFile('./index.html','utf-8',(err,file) => {
//   console.log(file);
// })


// 包装一层promise
let promise = (url) => new Promise((resolve,reject) => {
   fs.readFile(url,'utf-8',(err,file) => {
    if(err) {
      reject(err)
    } else {
      resolve(file)
    }
  })
})
// promise('./index.html').then((file) => {
//   console.log(file);
// }).catch((err) => {
//   console.log(err);
// })

// promise('./a.js').then((file) => {
//   console.log(file);
// })


// promise('./index.html').then((f1) => {
//   return promise('./a.js')
// }).then((f2) => {

// })