class Math{
  @log
  add(a,b) {
    return a + b
  }
}

// name: 类名或者类里面的方法名
function log(target,name, descriptor) {
  let oldValue = descriptor.value

  descriptor.value = function (...args) {
    console.log(`Calling ${name} with `, args);
    return oldValue.apply(this,args)
  }
  return descriptor
}

let math = new Math()
math.add(2,4)