const userModel = require('../lib/mysql')
const md5 = require('md5')
const fs = require('fs')

exports.postSignup = async ctx => {
  // await ctx.render('signup', {
  //   session: ctx.session // 模板文件生效
  // })
  console.log(ctx.request.body);
  //  已经拿到了浏览器传过来的参数
  // 调用数据库插入的方法
  let { name, password, avator } = ctx.request.body
  
  let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
      dataBuffer = new Buffer(base64Data, 'base64'),
      getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
      upload = await new Promise((reslove, reject) => {
          fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
              if (err) {
                  throw err;
                  reject(false)
              };
              reslove(true)
              console.log('头像上传成功')
          });
      });

    if (upload) {
      await userModel.insertData([name, md5(password), getName + 'png', new Date().getTime()])
            .then(res => {
              console.log('注册成功',res);
              ctx.body = {
                code: 200,
                message: '注册成功'
              }
            }).catch(err => {
              console.log(err);
            })
    }
}