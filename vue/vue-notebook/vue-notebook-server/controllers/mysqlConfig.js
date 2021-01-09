const mysql = require('mysql')
const config = require('./defaultConfig')

let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

let allServices = {
  query: function(sql,values) {
    return new Promise((resolve,reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql,values, (err, rows) => {
            if (err) {
              console.log(err)
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" AND userpwd="${userpwd}"`
  return allServices.query(_sql)
}

// 注册
let userRegister = function(value) {

  // let _sql = `insert into users(username,userpwd,nickname) values('${username}','${userpwd}','${nickname}')`
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql,value)

}

// 注册查询用户是否已经存在
let checkRegister = function(username) {

  let hasUSer = `select * from users where username='${username}'`
  return allServices.query(hasUSer)
}

// 查询笔记类型，返回所有匹配的文章
let findNote = function(note_type) {
  let _sql = `select * from note where note_type='${note_type}'`
  return allServices.query(_sql)
}

// 根据文章 id 查询，返回该文章内容
let findNoteDetail = function(id) {
  let _sql = `select * from note where id='${id}'`
  return allServices.query(_sql)
}

// 插入一条增加笔记的数据到数据库
let insertNote = function(value) {
  let _sql = `insert into note set useId=?,title=?,note_type=?,note_content=?,c_time=?,head_img=?,nickname=?;`
  return allServices.query(_sql,value)
}



module.exports = {
  userLogin,
  userRegister,
  checkRegister,
  findNote, 
  findNoteDetail,
  insertNote
}

