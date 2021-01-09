
const { manufacturer } = require("../model")

// 模块化控制器
const Model = require('../model')
const { Manufacturer} = Model
const manufacturerController = {
  create( req, res ) {
    // request response  逻辑中心  
    const requestBody = req.body;
    const newManufacturer = new Manufacturer(requestBody)
    newManufacturer.save((err,saved) => {
      if (err) {
        console.log(err);
        return ;
      }
      console.log(saved);
      // select 
      Manufacturer.findOne({
        _id: newManufacturer._id
      })
      .exec((err, manufacturer) => {
        res.json(manufacturer)
      })
    })
  },
  all(req,res ) {
    Manufacturer.find({}).exec((err,manufacturers) => res.json(manufacturers) )
  },
  byId (req,res) {
    const idParams = req.params.id
    Manufacturer.findOne({_id: idParams}).exec((err,manufacturer) => res.json(manufacturer))
  },
  remove (req,res) {
    const idParams = req.params.id
    Manufacturer.findOne({_id: idParams}).remove((err,removed) => {
      res.json(removed)
    })
  },
  update (req,res) {
    const idParams = req.params.id
    let manufacturer = req.body
    Manufacturer.updateOne({_id: idParams}, {...manufacturer},(err,updated) => res.json(updated))
  }
}
module.exports = manufacturerController