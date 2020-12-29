# defineProperty 和 proxy 的区别
  1. defineProperty 只能定义属性的读（get）和写（set）
     Proxy 可以定义更多的行为，比如： in, delete...
  2. 前者只能监听对象，后者不止能监听对象，还能监听函数等其他类型