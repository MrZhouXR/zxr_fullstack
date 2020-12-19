let array = [2 ,1 , 1, '1']

function unique(arr) {
  // let res = arr.filter((item,index,arr) => {
  //   return arr.indexOf(item) === index
  // })
  let res = arr.sort().filter((item,index,arr) => {
    // return arr.indexOf(item) === index
    return !index || item !== arr[index - 1]
  })
  return res
}

function unique2(arr) {
  return [...new Set(arr)]
}

let unique3 = (arr) => {
  return [...new Set(arr)]
}


console.log(unique(array));