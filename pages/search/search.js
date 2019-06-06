// pages/search/search.js
import { HotSearchList, handleDoSearch } from "../../utils/ajax.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: "",
    focus: true,
    hotWords: []
  },

  setQValue(e) {
    this.setData({
      q: e.detail.value
    })
  },
  // 点击热搜将热搜放到input框
  setInputValue(e){
    const { word } = e.detail
    this.setData({
      q: word
    },() => {
      this.doSearch(word)
    })
  },

  doSearch(word) {
   
    wx.navigateTo({
      url: `/pages/cateGery/cateGery?word=${word}`
      })
  },
  submitSearch(){
    if(Boolean(this.data.q)){
      // TODO: 在这里发送搜索请求
      wx.showLoading({
        title: '数据请求中...',
        mask: true
      })
      wx.hideLoading()
      this.doSearch(this.data.q)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    HotSearchList()
      .then(res => {
        const { hotWords }= res.data.data
        this.setData({
          hotWords
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