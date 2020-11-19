# 学习系统

  客户？
  需求 存储学生信息  OA

 - 学籍
   1. 学生信息登录及完善系统
      原型设计表单   小piu

   2. 照片上传功能
      云开发文件上传

   - 项目形式
    1. 小程序 （用户端）
        vant + 云开发
        微信/QQ小程序
    2. PC 端的Admin   后台系统
        VUE + ElementUI 
        分班级   分页  列表
        详情


    - 功能要求 细分
      1. 角色区分 role -1>1>2>3>4>5>6  数字越大 权限越大
      Admin/Teacher/StuAdmin/Student | TryStudent
        user 表 _id  uid(学号 )  pro_num  has_resume  has_job  shixi_company zhuanzheng_company shixi_salary             zhuanzheng_salary  score ( 荣誉 ) bid can_waibao
        ban 
          bid bname 

      2. 试听功能 | 邀请功能  运营  分享
        生成图功能   百度
      3. 学习跟进系统
        - github 提交 图
          收集用户的 github 账号
          https://github.com/${username}
          爬虫
        - 主动提交
          1. 每个人都一张图，新的覆盖旧的
            gitPic  _id  url uid bid 
          2. ts 标红
          3. 列表  按班级  
        - 文章系统  
          articles
            _id uid title desc ts is_top love_num url
            love_num 怎么计算
            user love_num 0  articles count save
            > 0  写文章时 + 1 
            post_article  
        - 项目
        - leetcode 算法  github  
        - 外包
          即时计件   倒计时  
          提交代码记录
          付费记录
          开源出去


        
