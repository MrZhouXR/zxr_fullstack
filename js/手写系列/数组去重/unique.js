let array = [1, 2, 3, 1, '1', '1']
let array1 = [1, 1, 2, 3, 'A', 'a', 3]


function unique(array, isSorted, iteratee) {
  let res = [];
  let seen = [];

  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i]
    let computed = iteratee ? iteratee(value) : value;
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}
console.log(unique(array,false));
console.log(unique(array1, true));
console.log(unique(array1, false, function (item) {
  return typeof item == "string" ? item.toLowerCase() : item;
}));



