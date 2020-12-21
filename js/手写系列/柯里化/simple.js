// function sub_curry(fn) {
//   return function() {
//     return fn()
//   }
// }

// function curry(fn, length) {
//   length = length || 4;
//   return function() {
//     if (length > 1) {
//       return curry(sub_curry(fn), --length)
//     } else {
//       return fn()
//     }
//   }
// }

// function func() {
//   console.log(1);
// }
// let fun = curry(func)

// fun()
// curry(sub_curry(func))
// curry(function() {
//   return func()
// })

// fun()()
// // 相当于
// curry(sub_curry(function() {
//   return func()
// }))
// // 相当于
// curry(function() {
//   return (function() {
//     return func()
//   })()
// })
// // 相当于
// curry(function() {
//   return func()
// })

// fun()()()
// curry(function() {
//   return func()
// })

// fun()()()()
// fn()
// (function(){
//   return func()
// })()
// func()


function curry(fn, args) {
  let length = fn.length
  args = args || []

  return function() {
    let _args = args.slice(0), arg, i;  // ['a', 'b'] 
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i]
      _args.push(arg)
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}


let test  = curry(function(a, b, c, d) {
  console.log([a, b, c, d]);
})
test('a')('b')('c')('d')
test('a','b','c','d')
test('a')('b','c','d')