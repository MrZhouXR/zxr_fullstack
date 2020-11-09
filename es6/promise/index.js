// js 是单线程语言
function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      resolve('ok')
    }, 1500)
  })
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ccc');
      // resolve('ok')
      reject('test')
    }, 500)
  })
}

function d() {
  console.log('ddd');
}

// Promise.all([a(), b(), c()]).then(d)

// Promise.race([a(), b(), c()]).then(d)


a().then(b).then(c).finally(d)

// Promise.prototype.then = function() {}
// Promise.prototype.catch = function() {}

// class Promise {
//   constructor() {

//   }

//   all () {

//   }

//   race () {

//   }
// }




function xq () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('酒神相亲！');
      resolve('成功')
      // reject('你太丑')
    }, 1000)
  })
}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('结婚大吉');
      resolve('入洞房')
    }, 500)
  })
}

function baby() {
  console.log('小酒神出生')
}

xq()
  .then((res) => {
    console.log(res)
    return marry()
  })
  .then((result) => {
    console.log(result)
    baby()
  })
  // .catch((err) => {
  //   console.log(err)
  // })