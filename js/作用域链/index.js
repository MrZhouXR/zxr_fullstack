// function test() {

// } 
// test.name   test.prototype
// test.[[scope]]

// test() ---> AO:{} //回收
// test() ---> AO:{}



function a() {
  function b() {
    var b= 222
  }
  var a = 111
  b()
  console.log(a);//111
}
var global = 100
a()