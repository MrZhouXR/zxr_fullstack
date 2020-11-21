// let arr = [1,2,3,4,2,3,4]
// let newArr = [...new Set(arr)]
// console.log(newArr);

// function test (color) {
//   switch (color) {
//     case 'red':
//       return ['apple']
//     case 'yellow':
//       return ['banana']
//     default:
//       return []
//   }
// }
// console.log(test('yellow')); // ['banana']


// const fruitColor = {
//   red: ['apple'],
//   yellow:  ['banana']
// }
// function test(color) {
//   return fruitColor[color]
// }
// test('red')


const fruitColor = new Map() 
                  .set('red',['apple'])
                  .set('yellow',['banana'])
function test(color) {
    return fruitColor.get(color)
}


