// target: 要拦截的目标对象
// handler：一个对象
// let proxy = new Proxy({}, {
//   get: function(obj, prop) {
//     console.log('get');
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('set');
//     obj[prop] = value
//   }
// })

// let handler = {
//   has(target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }

// proxy.time = 12


// let target = function() {
//   return 'sdfs'
// }

// let handler = {
//   apply: function() {
//     return 'proxy'
//   }
// }

// let p = new Proxy(target, handler)
// console.log(p()); // proxy


let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

// ownKeys: 返回自身的所有属性
let handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}

let proxy = new Proxy(target, handler)
console.log(proxy); // 返回该对象所有属性名，但是filter条件内的属性并不生效


for (let key of Object.keys(proxy)) {
  console.log(target[key]); // baz
}



