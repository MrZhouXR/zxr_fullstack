// pages/bookCity/bookCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: [],
    classifyData: []
  },
  getList: function (e) {
    wx.showLoading({
      title: '正在加载'
    })

    wx.cloud.callFunction({
      name: 'getList',
      data: {}
    }).then(res => {
      console.log(res);
      wx.hideLoading()
      const result = res.result || {}
      this.setData({
        hotData: result.hotData,
        classifyData: result.classifyData
      })
      console.log(this.data.classifyData);
      
    })
  },
  toReading: function(e) {
    let url =  e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../bookSection/bookSection?url=${url}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})