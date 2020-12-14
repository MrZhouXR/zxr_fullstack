const router = require('koa-router')()
const controller = require('../controller/c-signin')

router.post('/signin',controller.postSignin)

module.exports = router