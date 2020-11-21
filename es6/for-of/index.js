Array.prototype.e = 'e'
let arr = ['a', 'b', 'c', 'd']
let obj = {
  name: '111',
  age: 18,
  sex: 'man'
}

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

// for (let key in obj) { // 遍历对象
//   console.log(obj[key]);
// }

// for (let i of obj) { // 不可遍历对象 obj is not iterable
//   console.log(obj[i]);
// }

// for(let i of arr) {
//   console.log(i);// a b c d
// }

// for(let i in arr) {
//   console.log(arr[i]); //a b c d e
// }
// for(let key in arr) { 
//   console.log(key);// 0 1 2 3 
//   console.log(arr[key]); // a b c d
// }

function foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new foo()
console.log(bar);
for (let key in bar) {
  console.log(`index:${key} value:${bar[key]}`);
}

//ECMAScript 规范规定，数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序排列
arr.forEach((e, i) => { // 只能遍历数组
  console.log(e); //数组中每一项元素
  console.log(i); // 每一项下标
})