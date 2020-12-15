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
let userRegister = function(username, userpwd, nickname ) {

  let _sql = `insert into users(username,userpwd,nickname) values('${username}','${userpwd}','${nickname}')`
  return allServices.query(_sql)

}

// 注册查询用户是否已经存在
let checkRegister = function(username) {

  let hasUSer = `select * from users where username='${username}'`
  return allServices.query(hasUSer)
}


module.exports = {
  userLogin,
  userRegister,
  checkRegister
}

