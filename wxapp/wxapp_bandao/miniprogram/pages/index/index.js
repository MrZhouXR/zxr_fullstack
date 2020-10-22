//index.js

//wx 到微信云端引入数据库
const db = wx.cloud.database()
//CRUD增删改查
const _ = db.command
//table collection
const productsCollection = db.collection('products')
const photos = db.collection('photos')



const app = getApp()

Page({
  data: {
    products: [],
    photos: [],
    active:0,
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onChange(event) {
    console.log(event.detail);
    this.setData({ active: event.detail });
  },

  upload:function () {
    // console.log('111');
    // 云开发， SQL ， weixin 给与小程序能力
    // 在相机里选择
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: res => {
        // console.log(res);
        const temFilePaths = res.tempFilePaths
        for (let i = 0; i< temFilePaths.length; i++) {
          let randString = 
          + new Date() + '' + Math.floor(Math.random() * 1000000)
          + '.png'
          console.log(randString)
          wx.cloud.uploadFile({
            cloudPath: randString,
            filePath: temFilePaths[i],
            success: res => {
              if (res.statusCode == 200){
                photos.add({
                  data: {
                    image: res.fileID
                  }
                })
                .then(res => {
                  wx.showToast({
                    title: '上传成功',
                    icon: 'success'
                  })
                })
              }
              // console.log(res);
            }
          })
        }
      }
    })
  },

  onLoad: function() {
     productsCollection
      .get()
      .then(res => {
        // console.log(res);
        this.setData({
          products:res.data
        })
      })
      photos
        .get()
        .then(res => {
          // console.log(res);
          this.setData({
            photos: res.data
          })
        })
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
   
    return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
