var localDatabase = require('../../../data/local-database.js')
var app = getApp();
Page({
  data:{
    initRecordSize: 10
  },
  //事件处理函数
  swiperchange: function(e){
    console.log(e.detail.current)
  },
  onLoad: function(){
    this.setData({
      circleRecordList: localDatabase.circleRecordList
    });
    // wx.navigateTo({
    //   url: '/pages/circle/detail/detail',
    // })
  },
  onListItemTap: function(e){
    var currentTarget = e.currentTarget;
    var dataset = currentTarget.dataset;
    var listId = dataset.listId;
    
    wx.navigateTo({
      url: '/pages/circle/detail/detail',
      success: function(e){

      },
      fail: function(e){

      },
      complete: function(e){

      }
    })
  }
})