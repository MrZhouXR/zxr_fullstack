function test(p) {
  p.age = 26
  p = {  // 这是地址为002
    name: 'yyy',
    age: 30
  }

  return p
}

const p1 = { //假设地址为001
  name: 'xxx',
  age: 25
}

const p2 = test(p1)
console.log(p1); // {xxx 26}
console.log(p2); // {yyy 30}

// 1. 函数传参是传递对象指针的副本
// 2. p1 和 p 具有相同的指针，p 被修改，p1 也会被修改
// 3. p 拥有一个新的内存地址 



// static 只能被当前类内部访问
class PrimitiveString {
  static [Symbol.hasInstance] (x) { // Symbol.hasInstance让我们自定义 instanceof 的行为
    return typeof x === 'string'
  }
}

console.log('hello ' instanceof PrimitiveString);


