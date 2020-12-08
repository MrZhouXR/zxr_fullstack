存储服务

www  web  服务  3000
mongodb   27017
mysql   3306



全栈
：8080    vue    前端
webpack   webpack-dev-server  
vue-router

:3000 后端  node  +  go
:27017   数据库服务
MVC   

1.  启动mongodb    进程    
    mongod  --dbpath  "e:/data/db"
    NOSQL  /test/*.bson
    MYSQL  关系型数据库
    mongo  数据库交互命令行  


##  mongo 的交互语句
- show dbs; 显示数据库列表
- use tutorial;  创建一个tutorial数据库并进入
- mongodb 建表直接用
  前端非常友好
  给个JSON 它就存了  没有太严格的关系定义
  字段可有可无  没有那么严格
  物联网时代以及碎片化信息的收集
- db.users.insert({ })
- mysql table -> mongodb
  collection
  - find()
    $and 
    ObjectId("")  唯一
  - update()
  - 索引
  mysql  关系型数据库，mongodb, NOSQL 都有学习,对JS 特别友好，存 JSON 就可以了，对索引进行过学习
  : nums 数据库中 20000 条json 
  : num: i
  : nums: 500 

- 电商应用  
  node mongodb 

- 数据怎么进入数据库
  - 先连接
    mongodb url  once('open')
  - 对数据库建模
    userSchema  字段名 + 类型
    mongoose.model('User', userSchema)
    new User.save()