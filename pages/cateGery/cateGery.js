// pages/cateGery/cateGery.js
import {
    handleDoSearch,
    getGoodsFormId
  } from "../../utils/ajax.js"
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    sortIndex: 0,
    word: "美女",
    status: "",
    id: null
  },

  addToCart(e){
    const { 
      id,
      title,
      image,
      price
     } = e.currentTarget.dataset.info
     const args = {
       id,
       title,
       image,
       price
     }
    app.addToCartStorage(args)
  },

  getSearchList(word, sort = 0) {
    handleDoSearch(word, sort)
      .then(res => {
        this.setData({
          searchList: res.data.data.list.filter(item => Boolean(item.price))
        })
      })
  },
  changeSort(e) {
    const { sortid } = e.currentTarget.dataset
    this.setData({
      sortIndex: sortid
    },() => {
      this.data.status === "search" 
      ?
      this.getSearchList(this.data.word, sortid)
      :
      this.getListById(this.data.id, sortid)
    })
  },
  getListById(id, sortid){
    getGoodsFormId(id, sortid)
      .then(res => {
        this.setData({
          searchList: res.data.data.items.list
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    if(options.key === undefined){
      this.setData({
        status: "getListById",
        id
      },() => {
        this.getListById(id)
      })
    }else{
      const { word } = options
      if (word !== undefined) {
        this.setData({
          word,
          status: "search"
         })
      }
      this.getSearchList(this.data.word)
    }
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