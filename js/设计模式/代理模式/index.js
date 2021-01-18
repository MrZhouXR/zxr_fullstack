// 客户端 ---> DNS --> 代理服务器

const proxy = new Proxy(obj, handler)

// 未知女生
const girl = {
  name: 'xiaomei',
  about: '...',
  career: 'teacher',
  fakeAvatar: 'xxxx',
  phone: 123456,
  avatar: 'xxxx',
  persents: [],
  bottomValue: 50,
  lastPersent: persent
}

// 普通信息
const baseInfo = ['age', 'career']

// 私密信息
const privateInfo = ['avatar', 'phone']

// 礼物
const persent = {
  type: '巧克力',
  value: 60
}

const user = {
  isValidated: true,
  isVip: false
}

const lmlovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && user.isValidated) {
      alert('需要认证')
      return
    }

    // 校验
    if (user.isValidated && privateInfo.indexOf(key) && !user.isVip) {
      alert('需要vip')
      return
    }
  },
  set: function (girl, key, val) {
    if (key == 'lastPersent') {
      if (val.value < girl.bottomValue) {
        alert('sorry')
        return
      }

      girl.lastPersent = val
      girl.persents = [...girl.persents, val]
    }
  }
})