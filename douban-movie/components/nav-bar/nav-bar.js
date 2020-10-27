// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    statusBarColor:{
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    titleColor: {
      type: String,
      value: '#000'
    }
  },

  // 生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let navBarStyle = `background-color: ${this.data.navBarColor};
        height: ${wx.db.navBarHeight}px;color:${this.data.titleColor}
      `
      let statusBarStyle = `background-color: ${this.data.statusBarColor};
        height: ${wx.db.statusBarHeight}px
      `
      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight


      this.setData({
        navBarStyle,
        statusBarStyle,
        topHeight
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },



  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 0,
    statusBarStyle: '',
    navBarStyle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
