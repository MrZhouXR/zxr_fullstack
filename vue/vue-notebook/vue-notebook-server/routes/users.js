const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const  util  = require('../controllers/util')

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
    // console.log(res);
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

// 用户注册
router.post('/userRegister',async(ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname

  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80007',
      msg: '账号名或密码或昵称不能为空'
    }
  }

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
      await userService.userRegister([_username, _userpwd, _nickname]).then(res => {
        // console.log(res);
        if (res.affectedRows != 0) {
          let result = {
            id: res.insertId
          }
          ctx.body = {
            code: '8000',
            data: result,
            msg: 'register success'
          }
        } else {
          let result = 'err'
          ctx.body = {
            code: '80009',
            data: result,
            msg: 'register failed'
          }
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

// 查询文章列表
router.post('/findNoteListByType',async(ctx, next) => {
  let _note_type = ctx.request.body.note_type
  // console.log(_note_type);

  await userService.findNote(_note_type).then(res => {
    // console.log(res);
    if (res.length != 0) {
      let result = res
      ctx.body = {
        code: '8000',
        data: result,
        msg: '查询成功'
      }
    } else {
      ctx.body = {
        code: '800001',
        msg: '查询不到文章'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80003',
      data: err,
    }
  })
})

// 查询文章内容
router.post('/findNoteDetail', async(ctx, next) => {
  let content_id = ctx.request.body.content_id

  await userService.findNoteDetail(content_id).then(res => {
    if (res.length) {
      ctx.body = {
        code: '8000',
        data: res[0],
        msg: 'find detail success'
      }
    } else {
      ctx.body = {
        code: '80003',
        msg: 'find detail failed'
      }
    }
  }).catch(err => {
    console.log(err);
  })
})

// 将笔记插入到数据库中
router.post('/publishNote', async(ctx, next) => {
  let user_id = ctx.request.body.userId
  let  title = ctx.request.body.title
  let  note_type = ctx.request.body.note_type
  let  note_content = ctx.request.body.note_content
  let  head_img = ctx.request.body.head_img
  let  nickname = ctx.request.body.nickname
  let  c_time = util.c_time()
  // console.log(c_time);

  await userService.insertNote([user_id, title,note_type,note_content,c_time,head_img,nickname]).then(res => {
    console.log(res);
    if (res.affectedRows) {
      ctx.body = {
        code: '8000',
        msg: 'success'
      }
    } else {
      ctx.body = {
        code: '80004',
        msg: 'failed'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80003',
      data: err,
      msg: 'failed'
    }
  })
})

module.exports = router
