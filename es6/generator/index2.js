let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github')
  let json1 = yield r1.json()
  let r2 = yield fetch('https://api.github.com/users/github/followers')
  let json2 = yield r2.json()
  let r3 = yield fetch('https://api.github.com/users/github/repos')
  let json3 = yield r3.json()
  console.log([json1.documentation_url, json2.documentation_url, json3.documentation_url].join('\n'));
}

// let g = gen()
// let result = g.next()
// result.value.then(function(data) {
//   return data.json()
// }).then(function(data) {
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// })
function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)
    if (result.done) return
    result.value.then(function(data) {
      next(data)
    })
  }
  next()
}

run(gen)
