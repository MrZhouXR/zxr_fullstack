// pages/comment/comment.js
const db = wx.cloud.database() // 初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content: '',
    score: 5,
    movieId: -1,
    images: [],
    fileIds: []
  },
  submit: function (event) {
    wx.showLoading({
      title: '评论中',
    })
    let promiseArr = []
    for (let i = 0 ; i < this.data.images.length; i++ ) {
      promiseArr.push(new Promise((resolve,reject) => {
        let item = this.data.images[i]
        let suffix = /\.\w+$/.exec(item)[0] // 返回文件扩展名
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + suffix,// 上传至云端的路径
          filePath: item, // 文件路径
        }).then(res => {
          // get resource ID
          console.log(res.fileID)
          wx.hideLoading()
          this.setData({
            fileIds: this.data.fileIds.concat(res.fileID)
          })
          resolve('上传成功')
        }).catch(error => {
          // handle error
          console.error(error);
        })
      }))
      Promise.all(promiseArr).then(res => {
        db.collection('comment').add({
          data: {
            content: this.data.content,
            score: this.data.score,
            movieid: this.data.movieId,
            fileIds: this.data.fileIds 
          }
        }).then(res=>{
          wx.hideLoading();
          wx.showToast({
            title: '评价成功',
          })
        })
        .catch(err=>{
          wx.hideLoading();
          wx.showToast({
            title: '评价失败',
          })
        })  
      })
    }
  },
  
  uploadImg: function (event) {
    var that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        that.setData({
          images: that.data.images.concat(tempFilePaths)
        })
      }
    })
  },

  onScoreChange: function (event) {
    this.setData({
      score: event.detail
    })
  },

  onContentChange: function (event) {
    this.setData({
     content: event.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(that);
    
    that.setData({
      movieId: options.movieid
    });
    wx.showLoading({
      title: '加载中',
    })
    console.log(options);
    wx.request({
      url: `https://frodo.douban.com/api/v2/movie/${options.movieid}?apiKey=054022eaeae0b00e0fc068c0c0a2102a`,
      method: 'GET',
      success: function(res)  {
        console.log(res)
        that.setData({
          detail: res.data
        })
        wx.hideLoading();
      },
      fail:err => {
        console.error(err);
        wx.hideLoading();
      }
    })
    // wx.cloud.callFunction({
    //   name: 'getDetail',
    //   data: {
    //     movieid: options.movieid
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    //   this.setData({
    //     detail: JSON.parse(res.result)
    //   })
    // })
    // .catch(err => {
    //   console.error(err);
    // })
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