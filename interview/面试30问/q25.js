function foo() {}
var oldName = foo.name
foo.name = 'bar' // 函数名是禁止修改的

console.log([oldName, foo.name]); //[ 'foo', 'foo' ]
// console.log(oldName);