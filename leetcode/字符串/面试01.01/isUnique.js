/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  // let arr = []
  // for (let i = 0; i < astr.length; i++) {
  //     if (arr.includes(astr[i])) {
  //         return false
  //     }
  //     arr.push(astr[i])
  // }
  // return true
  return new Set(astr).size === astr.length
};