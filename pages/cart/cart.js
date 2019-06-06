// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    countNum: 0,
    countPrice:0 
  },
  checkBoxChange: function(e){
    const obj = {}
    e.detail.value.forEach((item, index)=> {
      obj[item] = item
    })
    const total = this.data.cartList.reduce((total, current, index)=>{
      total.price += obj[current.id] === undefined
      ?
      0
      :
      current.price * current.count

      total.num += obj[current.id] === undefined
      ?
      0
      :
      current.count

      return total
    }, {price: 0, num: 0})
    this.setData({
      countPrice: total.price,
      countNum: total.num
    })
  },
  itemCrement(e){
    const {
      type,
      id
     } = e.currentTarget.dataset
     let times = 0
    times = type === "increment" ? 1 : -1
    app.handleChangeItemCountNum(id, times)
    this.changeCartItem()
  },
  removeItem(e){
    const id = e.currentTarget.dataset.removeid
    app.removeCartItemById(id)
    this.changeCartItem()
  },
  changeCartItem: function(){
    const cartList = wx.getStorageSync("cartList") || []
    this.setData({
      cartList
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
    this.changeCartItem()
    app.showBadge()
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