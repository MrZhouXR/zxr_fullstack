// 单例模式：一个类只有一个实例
class SingleDog{
  show() {
    console.log('locky dog');
  }
  static getInstance() {
    let instance = null
    return (function() {
      if(!instance) {
        instance = new SingleDog()
      }
      return instance
    })()
    // if(!SingleDog.instance) {
    //   SingleDog.instance = new SingleDog()
    // }
    // return SingleDog.instance
  }
}
const s1 = SingleDog.instance
const s2 = SingleDog.instance
s1 === s2