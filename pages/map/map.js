// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 1,
      latitude: 31.54202,
      longitude: 104.695562,
      title: "西南科技大学6433223",
      iconPath: "../../icon/home/location.png"
    }]
  },
  markertap(e){
    wx.openLocation({
      latitude: 31.54202,
      longitude: 104.695562,
      scale: '',
      name: '',
      address: '西南科技大学',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(e)
    wx.addPhoneContact({
      photoFilePath: '',
      nickName: 'zhoushuai',
      lastName: '帅',
      middleName: '周',
      firstName: '何',
      remark: '何周帅',
      mobilePhoneNumber: '15351444744',
      weChatNumber: 'hezhoushuai',
      addressCountry: 'China',
      success: function(res) {
        wx.showToast({
          title: '保存成功',
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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