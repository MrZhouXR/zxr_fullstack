const User_col = require('../models/user_model')
const Password_col = require('../models/password');
const passport = require('../utils/passport')
const { db } = require('../models/user_model');
const { v1: uuidV1 } = require('uuid')
const config = require('../../config.js')
// const { validate } = require('../models/user_model');

const login = async ( ctx ) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 连接数据库，去数据库里查找是否存在该条数据
  // 查找语句  
  // 获取用户的 userId

  const user = await User_col.findOne({
    account: req.username
  })
  if ( !user ) {
    ctx.status = 200,
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return 
  }

  // 数据库中能找到用户
  const userId = user.userId

  // 密码匹配
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  // 如果在密码表中找到了与账号相同的 userId ，判断该密码和前端传过来的密码是否匹配
  // 解密
  const match = await passport.validate(req.password, pass.hash)

  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: 'login success',
      data: user
    }
    return;
  }
  ctx.body = {
    code: 0,
    msg: 'login failed'
  }
}

const register = async (ctx) => {
  console.log(ctx.request.body);
  const req = ctx.request.body
  const NewUser = await User_col.findOne({
    account: req.username
  })
  // console.log(NewUser);
  if ( NewUser ) {
     ctx.body = {
      code: 0,
      msg: '账号已存在'
    }
    return 
  }
  const userId = uuidV1()
  console.log(userId);
  const userInsert = await  User_col.create({
    userId: userId, 
    account: req.username
  })
  // console.log(userInsert);
  if (userInsert) {
    // 密码插入
    const passwordHash = await passport.encrypt(req.password, config.saltTimes)
    console.log(passwordHash);
    const passInsert = await  Password_col.create({
      userId: userId, 
      hash: passwordHash
    })
    if (passInsert) {
      ctx.body = {
        code: 1,
        msg: 'register success',
        data: {
          userId: userInsert.userId,
          account: userInsert.account
        }
      }
    }
  }
}

module.exports = {
  login,
  register
}