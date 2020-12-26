var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// @annotation 
// class MyClass {
//   constructor() {
//     this.annotated = true
//   }
// }
// function annotation(target) {
//   target.annotated = true
// }
let MyClass = (_class = class MyClass {
  method() { }

}, (_applyDecoratedDescriptor(_class.prototype, "method", [readonly, unenumerable], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype)), _class);

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function unenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
