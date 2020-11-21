// let foo = {
//   value: 1,
//   getValue: () => { // 箭头函数没有 this
//     console.log(this.value);
//   }
// }

// foo.getValue() // undefined
// `` 模板拼接的新方法


function foo() {
  this.value = 1
}
foo.prototype.getValue = () => console.log(this.value);
let foo = new foo()
foo.getValue() // undefined