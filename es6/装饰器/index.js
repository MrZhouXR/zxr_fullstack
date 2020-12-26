// @annotation 
// class MyClass {
//   constructor() {
//     this.annotated = true
//   }
// }


// function annotation(target) {
//   target.annotated = true
// }

class MyClass{
  @readonly
  @unenumerable
  method() {

  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function unenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}