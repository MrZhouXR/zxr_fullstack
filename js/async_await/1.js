// function a() {
//   return new Promise((resolve, reject) => {
//    setTimeout(() => {
//     console.log('aaaa');
//     resolve() 
//   },1000)
//   })
// }

// function b() {
//   console.log('bbbb');
// }

// a().then(b)

// async 声明该函数内部可能存在异步情况
async function asyncPrint(value, ms) {
  await setTimeout(ms) // 阻塞后面的代码
  console.log(value);// 去到微任务队列
}

asyncPrint('hello world',1000)
console.log('ok');

