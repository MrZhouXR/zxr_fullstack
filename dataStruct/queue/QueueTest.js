"use strict";
exports.__esModule = true;
// 测试驱动开发 TDD
var Queue_1 = require("../lib/Queue");
var names = ['张三', '李四', '王五 ', '朱六'];
// const result = hotPotata(names, 4)
var queue = new Queue_1["default"]();
// for (let i = 0; i < names.length ; i++) {
//   queue.enqueue(`队列中的第${ i + 1}条数据`)
//   // queue.enqueue('队列中的第二条数据:')
// }
queue.enqueue("队列中的第一条数据");
queue.enqueue("队列中的第二条数据");
queue.enqueue("队列中的第三条数据");
queue.enqueue("队列中的第四条数据");
queue.enqueue("队列中的第五条数据");
queue.dequeue();
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.toString());
