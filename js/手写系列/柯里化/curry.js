function sub_curry(fn) {
  let args = [].slice.call(arguments, 1)
  return function() {
    // let newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {
  length = length || fn.length;
  console.log(fn);
  let slice = Array.prototype.slice;
  return function() {
    if (arguments.length < length) {
      let combined = [fn].concat(slice.call(arguments))
      console.log(combined);
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}

let test = curry(function(a, b, c) {
  return [a, b, c]
})
console.log(test('a', 'b', 'c'));
console.log(test('a')('b')('c'));
console.log(test('a', 'b')('c'));


// function add(a, b) {
//   return a + b
// }

// // let addCurry = curry(add, 1, 2)
// // let addCurry = curry(add, 1)
// let addCurry = curry(add)
// let addCurry2 = addCurry(1)
// console.log(addCurry2(2));