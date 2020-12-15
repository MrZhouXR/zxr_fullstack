const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })


router.post('/userLogin', async(ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd

  // 把参数拿到数据库里查询
  await userService.userLogin(_username,_userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '8000',
        data: result,
        msg: 'login success'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        msg: 'login failed'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: error,
    }
  })

})

router.post('/userRegister',async(ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname

  await userService.checkRegister(_username).then( async res => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'exist'
      ctx.body = {
        code: '80004',
        data: r,
        msg: 'the username has exist'
      }
    } else {
      await userService.userRegister(_username, _userpwd, _nickname).then(res => {
        console.log(res);
          let result = {
            id: res.insertId
          }
          ctx.body = {
            code: '8000',
            data: result,
            msg: 'register success'
          }
        // userService.checkRegister(_username).then(res => {
        //   console.log(res);
        //   if (res.length) {
        //     let result = {
        //       id: res[0].id,
        //       nickname: res[0].nickname,
        //       username: res[0].username,
        //       userpwd: res[0].userpwd
        //     }
        //     ctx.body = {
        //       code: '8000',
        //       data: result,
        //       msg: 'register success'
        //     }
        //   } else {
        //     r = 'fail'
        //     ctx.body = {
        //       code: '80005',
        //       data: r,
        //       msg: 'register failed'
        //     }
        //   }
        // }).catch(err => {
        //   ctx.body = {
        //     code: '80001',
        //     data: error,
        //   }
        // })
      }).catch(err => {
        ctx.body = {
          code: '80002',
          data: error,
        }
      })
    }
  }).catch(error => {
    ctx.body = {
      code: '80003',
      data: error,
    }
  })
})

module.exports = router
