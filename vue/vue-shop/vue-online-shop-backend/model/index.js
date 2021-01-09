// 数据库里有哪些collection  就有哪些集合的定义
// DB 数据库驱动
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);

const ObjectId = mongoose.Schema.Types.ObjectId;

// 电商应用  Product  Manufacture  
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {
    type: ObjectId, 
    ref: 'Manufacturer'
  }
})
const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
});

// 构建模型
const Product = model('Product', productSchema); 
const Manufacturer = model('Manufacturer', manufacturerSchema);



// es5 commonJS 模块化方案  node  以稳定性为主
module.exports = {
  Product,
  Manufacturer
}
