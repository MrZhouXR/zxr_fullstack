// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "xuanxiao-9gjrz60a10d8a0f8"

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境


// 云函数入口函数
exports.main = async (event, context) => {
    var that = this
    const openId = cloud.getWXContext().OPENID
    // 查找user-group这个库里面是否具有该openId
    const result = await db.collection('user-group').where({
      groupId: openId
    }).get({
      success(res) {
        console.log('查询成功',res.data);
        
      }
    })
    console.log(result);
    
    // 按照这个openId把user-group里相应的数据取出
    // 去group中查找所有的_id 和groupId相同的数据
  
}