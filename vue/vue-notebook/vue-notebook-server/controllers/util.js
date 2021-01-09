let c_time =   function() {
  return new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + new Date().getDate() + '日'
}

module.exports = {
  c_time
}