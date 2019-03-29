// pages/classify/index.js
var localClassifyList = require("../../data/classify.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      navLeftItems: localClassifyList.classifyList,
      navRightItems: localClassifyList.classifyCommondityList[this.data.curNav]
    });
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

  },

  switchRightTab: function(evt){
    var dataset = evt.target.dataset;
    var tempNavRightItems = localClassifyList.classifyCommondityList.hasOwnProperty(dataset.id) ? localClassifyList.classifyCommondityList[dataset.id] : [];
    this.setData({
      curNav: dataset.id,
      curIndex: parseInt(dataset.index),
      navRightItems: tempNavRightItems
    });
  }
})