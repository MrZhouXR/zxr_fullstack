var a = {}
var b = Object.prototype;

[a.prototype === b, Object.getPrototypeOf(a) == b]

// 对象是没有prototype属性的
// [false, true]
