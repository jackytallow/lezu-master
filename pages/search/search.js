// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    houseType:['一室户','两室户','三室户'],
    houseTypeIndex:0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   let that = this
  //   //获取全局数据
  //   app.getUserInfo(function(userinfo){
  //      //更新数据
  //      that.setData({
  //         userinfo:userinfo
  //      })
  //   })
  // },

  //改变户型，使用bindPickerChange(e)
     
  //  bindPickerChange(e){
  //    let _this = this;
  //    _this.setData({
  //      //获取数值
  //      houseTypeIndex:e.detail.value
  //    })
  //  }
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