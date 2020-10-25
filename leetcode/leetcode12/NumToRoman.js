/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var reqs = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

  var res = '' 
  for( var i = 0; i < reqs.length; i++){
      while(num >= values[i]){
          num -= values[i]
          res += reqs[i]
      }
  }
  return res
};