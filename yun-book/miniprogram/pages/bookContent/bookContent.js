// pages/bookContent/bookContent.js
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    url: '',
    imgUrl: '',
    pre:'',
    next:'',
    catalog: '',
    sectionName: '',
    contentH: '',
    content: ''
  },
  getContent: function(url) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.cloud.callFunction({
      name: 'getContent',
      data: {
        url:url
      }
    }).then(res => {
      console.log(res);
      wx.hideLoading()
      this.setData({
        contentH: res.result.contentH,
        pre: res.result.pre,
        next: res.result.next,
        catalog: res.result.catalog,
        content: res.result.content
      })
      wx.pageScrollTo({
        scrollTop: 0,
      })
    })
  },
  prePage: function(e) {
    console.log(e.currentTarget.dataset.url);
    let url = e.currentTarget.dataset.url
    if(url) {
      if (url.endsWith('.html')) {
        this.joinBook(url)
        this.getContent(url)
      } else {
        return 
      }
    }
    
  },
  nextPage: function(e) {
    console.log(e.currentTarget.dataset.url);
    let url = e.currentTarget.dataset.url || ''
    if(url) {
      if (url.endsWith('.html')) {
        this.joinBook(url)
        this.getContent(url)
      } else {
        return 
      }
    }
  },
  joinBook: function(url) {
    db.collection('book').where({
      _openid: app.globalData.openid,
      bookName: this.data.name
    }).get().then(res => {
      const data = res.data || []
      if (data.length > 0) { // 本书已存在书架中
        if (data[0].bookUrl !== url) {
          const id = data[0]._id || ''
          db.collection('book').doc(id).update({
            data: {
              bookUrl:url
            }
          }).then(res => {
            console.log(res);
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let { url, name, imgUrl } = options
    this.setData({
      url,
      name,
      imgUrl
    }) 
    this.getContent(url)
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