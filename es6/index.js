// es6 的新增的数组的方法
let arr = ['a' , 'b' , 'c']
// let newArr = [...arr.keys()]
// console.log(newArr); // [ 0, 1, 2 ]

// let iter = arr.entries()
// for (let e of iter) {
//   console.log(e); // [ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ]
// }
// console.log(iter); // Object [Array Iterator] {}


// let vArr = arr.values()
// for (let e of vArr) {
//   console.log(e); // a , b , c
// }

// function test(fruit) {
//   const redFruits = ['apple', 'cherry']
//   if (redFruits.includes(fruit)) {
//     console.log('red');
//   }
// }

// let people = [
//   {
//     name: 'ttt',
//     age: 20
//   },
//   {
//     name: 'wine',
//     age: 18
//   },
//   {
//     name: 'yyy',
//     age: 16
//   }

// ]
// function findFriend(person) {
//   return person.name === 'ttt'
// }
// console.log(people.find(findFriend));


let test = ['a' , 'b' , 'c']
function index(i) {
  return i === 'b'
}
console.log(test.findIndex(index));