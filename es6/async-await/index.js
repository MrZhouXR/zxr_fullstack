// function fetchData() {} // 获取数据

// function fetch() {
//   return (
//     fetchData()
//     .then(() => {
//       return 'done'
//     })
//   )
// }

// async function fetch() {
//   await fetchData()
//   return 'done'
// }

// function fetch() {
//   try {
//     fetchData().then(result => {
//       const data = JSON.parse(result)
//     }).catch(err => {
//       console.log(err);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetch() {
//   try {
//     const data = JSON.parse(await fetchData())
//   } catch (error) {
//     console.log(error);
//   }
// }

class Foo {
  constructor() {

  }
  static bar() {
    this.baz()
  }
  // static baz() {
  //   console.log('world');
  // }
  baz() {
    console.log('hello');
  }
}
console.log(Foo.baz());
// let foo = new Foo()
// foo.baz()

// class Shop{
//   constructor (width, height) {
//     this._width = width
//     this._height = height
//     // this.area = width * height
//   }

//   get area () {
//     return this._width * this._height
//   }

// }

// const square = new Shop(10,10)
// console.log(square.area);
