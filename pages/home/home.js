// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationInfo: ""
  },

  jumpToSearch() {
    wx.navigateTo({
      url: `/pages/search/search?id=${123}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      altitude: true,
      success: (res) => {
        wx.request({
          url: `http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=${res.latitude},${res.longitude}&output=json&pois=0&latest_admin=1&ak=GLklVKisYIGG8NiAWj3azXs4LCNxVZ7K`,
          data: '',
          header: {},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            const location = res.data
            const locationInfo = Boolean(res.data)
            ?
            JSON.parse(location.slice(location.indexOf("(") + 1, location.indexOf(")")))
            :
            ""
            this.setData({
              locationInfo: locationInfo.result.addressComponent.city
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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