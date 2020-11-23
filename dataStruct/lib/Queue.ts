

interface QueueObj{
  [propname :number]: any
}


export default class Queue {
  // javascript 高级写法
  private count: number // 元素的数量
  private lowestCount: number 
  private items: QueueObj

  constructor() {
      this.count = 0
      this.lowestCount = 0
      this.items = {} // JSON Object O(1)
  }

  enqueue(item: any) {
    this.items[this.count] = item
    this.count++
  } 

  dequeue() {
    // FIFO 先进先出 队列
    // ts datastruct 有态度
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // 返回队首元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0
    this.items = {}
  }

  isEmpty() {
    return this.count === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for( let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items}`
    }
    return objString
  }
}