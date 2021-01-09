// Manufacturer  有多少商家
// MVC  api  向外暴露数据
// 1. 设计一个 URL   RESTFUL
// /api/v1/manufacturer  GET  [{name: 'xiaomi'}]
// /api/v1/manufacturer  POST  body {}

const express = require('express');
const router = express.Router();
const manufacturerController = require('../../controllers/manufacturer');
const { Manufacturer } = require('../../model');

// 定义url访问的入口
router.get('/manufacturers', manufacturerController.all)
router.get('/manufacturers/:id', manufacturerController.byId)
router.delete('/manufacturers/:id', manufacturerController.remove)
router.put('/manufacturers/:id',manufacturerController.update)
router.post('/manufacturers', manufacturerController.create)
module.exports = router