let deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasproperty(key)) {
      newObj[key] =typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}