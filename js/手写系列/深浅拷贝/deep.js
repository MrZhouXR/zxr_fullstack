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

// 深拷贝优化： 优化循环引用
let isObject = (target) => {
  return (typeof target == 'object' || typeof target == 'function') && target !== null
}

const deepClone = (target, map = new WeakMap()) => {
  if(map.get(target)) {
    return target
  }
  if(isObject(target)) {
    map.set(target,true)
    let cloneDeep = Array.isArray(target) ? [] : {}
    for(let prop in target) {
      if(target.hasOwnProperty(prop)) {
        cloneDeep[prop]  = deepClone(target[prop])
      }
    }
    return cloneDeep
  }
  return target
}