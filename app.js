//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  showBadge: function() {
    // 给购物车添加badge
    let list = wx.getStorageSync("cartList") || []
    this.globalData.cartNum = list.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
    const text = this.globalData.cartNum.toString()
    this.globalData.cartNum && wx.setTabBarBadge({
      index: 2,
      text
    })
  },
  globalData: {
    userInfo: null,
    cartNum: "0",
    cartList: []
  },
  //操作当前商品数量
  handleChangeItemCountNum: function(id, countNum){
    let list = wx.getStorageSync("cartList") || []
    list = list.filter(item => {
      item.id === id && (item.count += countNum)
      return item.count <= 0 ? null : item
    })
    wx.setStorageSync("cartList", list)
    this.showBadge()
  },
  // 移除当前商品
  removeCartItemById: function(id){
    const list = wx.getStorageSync("cartList").filter(item => item.id !== id)
    wx.setStorageSync("cartList", list)
    this.showBadge()
  },
  // 添加到购物车storage
  // 需要参数 {id, title, image ,price} = args
  addToCartStorage: function(args) {
    const {
      id,
      title,
      image,
      price
    } = args
    const list = wx.getStorageSync("cartList") || []

    list.some(item => item.id === id)
      ?
      list.map(item => {
        item.id === id && item.count++
        return item
      })
      :
      list.push({
        id,
        title,
        image,
        price,
        count: 1
      })
    wx.setStorageSync("cartList", list)
    wx.showToast({
      title: '成功添加到购物车',
      duration: 1000,
      mask: true
    })
  }
})