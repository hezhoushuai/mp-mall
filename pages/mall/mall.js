// pages/mall/mall.js
import {
  getMallList,
  getMallDetailList 
} from "../../utils/ajax.js" 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mallList: [],
    current: 0,
    detailLsit: []
  },
  toCateGeory(e){
    let { id } = e.currentTarget.dataset 
    id = (id + ".").slice(id.indexOf("=") + 1, -1)
    wx.navigateTo({
      url: `/pages/cateGery/cateGery?id=${id}`
    })
  },
  changeList(e){
    const { id } = e.currentTarget.dataset
    this.setData({
      current: id
    },() => {
      this.getDetailList()
    })
  },
  getDetailList(){
    getMallDetailList(this.data.current)
      .then(res => {
        this.setData({
          detailLsit: res.data.data.categories
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getMallList()
      .then(res => {
        this.setData({
          mallList: res.data.data.list.filter((item, index) => index > 0)
        },() => {
          this.setData({
            current: this.data.mallList[0].id
          },() => {
            this.getDetailList()
          })
        })
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
    getApp().showBadge()
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