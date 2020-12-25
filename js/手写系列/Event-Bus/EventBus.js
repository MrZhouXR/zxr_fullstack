class EventEmitter{
  constructor() {
    // 存储事件
    this.events = this.events || new Map()
  }

  // 监听事件
  addEventListener(type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }

  // 出发事件
  emit(type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }

}

let emitter = new EventEmitter()
emitter.addEventListener('ages', age => {
  console.log(age);
})

emitter.emit('ages', 18)