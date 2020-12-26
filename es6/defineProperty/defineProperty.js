let obj = {}
Object.defineProperty(obj, 'num', {
  // value: 1, // 数据描述符
  // writable: true,// 数据描述符
  enumerable: true,// 属性描述符
  configurable: true,// 属性描述符
  //getter
  get: undefined, // 存取描述符
  //setter
  // 存取描述符
  set: undefined
})

console.log(obj); // { num : 1 }