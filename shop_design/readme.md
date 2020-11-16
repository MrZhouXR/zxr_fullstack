# 电商网站设计
复杂的东西   不知道怎么搞
section  html语义
module  模块化
- 地址化模块
- 支付方式模块
- 店铺模块
  - 商品模块
  - 商品基础信息模块
  - 商品优惠信息模块
  - 售后模块
  - 物流模块
  - 店铺商品金额信息模块
- 发票模块
- 优惠券模块
- 平台积分模块
- 礼品卡模块


# 地址模块
  - 首先，用户设置的默认地址 字段
  - 如果没有设置默认，则返回最近下单的地址

### 设计表结构
consignee 收货人姓名
email 邮箱
mobile 手机号
好送
country { id: 86, name: ""}
province
city
county
street
detailed_address
postal_code
address_id
is_default Boolean
label  
longitude
latitude