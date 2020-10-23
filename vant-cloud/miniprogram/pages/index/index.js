//index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const app = getApp()

Page({
  data: {
   newGroupModal:false,
   groupName:''
  },

  newGroupModal:function() {
    this.setData({
      newGroupModal: true
    })
  },

  onClose:function() {
    this.setData({
      newGroupModal: false
    }
    )
  },
  
  // 创建一个群组
  createGroup() {
    const self = this
    if (self.data.groupName === "") {
      Notify({
        message: '当前输入框不能为空',
        duration: 1500,
        selector: '#notify-selector',
        background: '#dc3545'
      });
      self.setData({
        newGroupModal: true
      })
    }
    // 将groupName传到后端中
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName: self.data.groupName
      },
      success(res) {
        // console.log(res);
        self.setData({
          groupName: ''
        })
        Notify({
          message: '新建成功',
          duration: 1500,
          selector: '#notify-selector',
          background: '#28a745'
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/group/group',
          }) 
        },1500)
      },
      fail(err) {
        console.log('错误',err);        
      } 
    })
  },
  // 获取到输入框中的内容
  onGroupNameChange: function(event) {
    // 将获取到的内容传到data中
    this.setData({
      groupName:event.detail
    })
  },

  onLoad: function() {
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
