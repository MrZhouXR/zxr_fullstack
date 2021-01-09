# 全栈目录结构
  - 前台
    - 用户端    vue
    - 管理后台  react + antd
  - API 后端 服务器端  node + java

  vue create ...frontend  前端 8080端口
  express ...backend  后端  3000端口
  mongodb  27017


  前端   生命周期  mounted  
  axios  发送请求
  -> API  向后端通信
  http://localhost:8080 -> :3000   跨域

  - 后端接口先调通
    localhost:3000/users/:zxr  返回一个JSON
    {
      name: 'zxr',
      sex: '1'
    }
    1. url 响应  /api/
      加路由  /api/v1/
      app.use(启用路由)
    2. 返回 JSON 
    3. postman  模拟请求
    4. 前端请求
    5. 跨域（CORS）不只是域名不一样，端口和协议不一样都算跨域
    6. App.all  后端配置解决


- 基于 mongodb  数据流  -》  MVC  node(express)
-> Vue 界面
  1. model 层的构建
    这是一个精简版的model 层，model 目录有，
    index.js 所有的模型定义在这里
    mongoose.Schema  根据数据库结构定义
    生成类   
  2. postman  测试一下数据  
    - 路由   