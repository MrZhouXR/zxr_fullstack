// function generateCapitalStringWithHashTag(str) {
//   // 1.是否为空
//   // 2.是否超过140字符
//   // 3.以#开头
//   // 4.每个单词首字母大写
//       return str.length > 140 || str == '' ? false : '#' +   str
//         .split(" ")
//         //es6 数组的新办法，遍历数组的每一项 并用一个函数和处理，返回新的数组
//         .map(function(word) {
//           // console.log(word);
//           // return word.toUpperCase()
//           return word.charAt(0).toUpperCase() + word.slice(1)
//         })
//         .join(' ')  
// }

function generateCapitalStringWithHashTag (str) {
  return str.length > 140 || str == '' ? false : '#' + str.split('').map(capitalize).join('')
}


function capitalize(str) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}




generateCapitalStringWithHashTag("hello world")
