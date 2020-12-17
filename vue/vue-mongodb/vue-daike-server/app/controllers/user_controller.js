const User_col = require('../models/user_model')
const Password_col = require('../models/password')

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
  
}

module.exports = {
  login
}