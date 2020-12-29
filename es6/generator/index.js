let fetch = require('node-fetch')

function* gen() {
  let url = 'https://api.github.com/users/github'
  let result = yield fetch(url)
  console.log(result.bio);

}

let g = gen() // 遍历器对象

let res = g.next() // 执行异步任务的第一阶段 fetch(url)
// { value: Promise {<pending>}, done: false}


res.value.then(function(data) {
  return data.json()
}).then(function(data){
  g.next(data)
})