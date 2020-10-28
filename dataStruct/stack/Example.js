"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack"); // es6的模块化引用
var StackObj_1 = require("./lib/StackObj");
var stack = new Stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peek()); // 第一条数据
console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false
console.log(stack.toString()); // 第一条数据
console.log(stack.clear()); // undefined
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"](); // 入栈每一个位
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number /= 2;
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new StackObj_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number /= 2;
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber1 = 20;
console.time("数组栈");
console.log(decimalToBinary(testNumber1));
console.timeEnd("数组栈");
var testNumber = 16;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
