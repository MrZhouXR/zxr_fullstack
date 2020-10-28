"use strict"

import Stack from './lib/Stack'; // es6的模块化引用
import ObjStack from './lib/StackObj';

const stack = new Stack()
stack.push("第一条数据")
stack.push("第二条数据")
stack.pop();

console.log(stack.peek());// 第一条数据
console.log(stack.size());// 1
console.log(stack.isEmpty()); // false
console.log(stack.toString());// 第一条数据
console.log(stack.clear());// undefined

const decimalToBinary = function (decNumber: number) {
  let stack = new Stack(); // 入栈每一个位
  let number = decNumber;
  let rem;// 余数
  let binaryString = "";
  while (number > 0){
    rem = Math.floor(number % 2);
    stack.push(rem)
    number /= 2
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }
  return binaryString
}


const decimalToBinaryObjStack = function (decNumber) {
  const stack = new ObjStack()
  let number = decNumber;
  let rem;// 余数
  let binaryString = "";
  while (number > 0){
    rem = Math.floor(number % 2);
    stack.push(rem)
    number /= 2
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }
  return binaryString
}

const testNumber1 = 20;
console.time("数组栈");
console.log(decimalToBinary(testNumber1));
console.timeEnd("数组栈")

const testNumber = 16
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈")



