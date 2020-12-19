let array = [1, 2, 3, 1, '1', '1']

function myset(array) {
  let newArr = []

  for (let i = 0; i < array.length; i++) {
    if(newArr.length == 0) {
        newArr.push(array[i])
    }
    for (var j = 0; j < newArr.length; j++) {
      if(array[i] === newArr[j]) {
        break
      } 
    }
    if(j === newArr.length) {
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(myset(array)); 