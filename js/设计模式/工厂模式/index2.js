class OS {
  controlHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重学！')
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式去操作硬件');
  }
}
class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用苹果的方式去操作硬件');
  }
}

// ---------------------
class HardWare {
  oprateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重学！')
  }
}
class QualcommHardWare extends HardWare {
  oprateByOrder() {
    console.log('我会以高通的方式去运转');
  }
}
class HuaweiHardWare extends HardWare {
  oprateByOrder() {
    console.log('我会以华为的方式去运转');
  }
}



class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS () {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重学！')
    return new AndroidOS()
  }
  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重学！')
    return new QualcommHardWare()
  }
}

const myPhone = new FakeStar()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controlHardWare()
myHardWare.oprateByOrder()


class newStarFactory extends MobilePhoneFactory{
  
}
