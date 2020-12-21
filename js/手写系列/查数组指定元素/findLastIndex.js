// indexOf
// console.log([1, 2, 3, 4].indexOf(3));
// console.log([1, 2, 3, 4].lastIndexOf(2));


function findLastIndex(array, predicate, context) {
  let length = array.length;
  for (let i = length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return i
  }
  return -1;
}

console.log(findLastIndex([1, 2, 3, 4], function(item, index, array) {
  if (item == 1) return true
})); // 0
