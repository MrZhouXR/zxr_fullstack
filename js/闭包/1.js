// function test() {
//   var arr = []
//   for ( var i = 0; i < 10; i++) {
//     arr[i] = function () {
//       console.log(i);
//     }  
//   }
//   return arr
// }
//  var myArr = test()


// function a() {
//   function b() {
//     var bbb = 234
//     console.log(aaa);
//   }
//   var aaa = 123
//   return b
// }
// var global = 100 
// var demo = a()
// demo()


// var count = 0
// function add() {
//   count ++
//   console.log(count);
// }
// add()


// 实现共有变量
// function add() {
//   var num = 0
//   function a() {
//     console.log(++num);
//   }
//   return a 
// }
// var result = add()


function test() {
  var food = 'apple'

  function a() {
    console.log(food);
    food = 'banana'
  }

  function b() {
    console.log(food);
  }
}
