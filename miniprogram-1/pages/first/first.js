// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starty: 0, //开始的位置x
    endy: 0, //结束的位置y
    margintop: 0, //滑动下拉距离
    shares_list: [
      {
        "_id": "数据库自动生成的字段",
        "_openid": "数据库自动生成的用户的openid字段,也是哪位用户上传的",
        "artical_id": "发表动态的ID号，openid+时间",
        "artical_author_name": "发表动态的作者名",
        "artical_author_url": "发表动态的作者的头像",
        "artical_title": "发表动态的标题",
        "artical_content": "发表动态的内容",
        "aritical_pic_list": [
          {
            "artical_pic_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597061079818&di=e08b4c64a80527d5f0884ce2bcf0e135&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161203%2F3-1612030ZG5.jpg"
          }
        ]
      },
      {
        "_id": "数据库自动生成的字段",
        "_openid": "数据库自动生成的用户的openid字段,也是哪位用户上传的",
        "artical_id": "发表动态的ID号，openid+时间",
        "artical_author_name": "发表动态的作者名",
        "artical_author_url": "发表动态的作者的头像",
        "artical_title": "发表动态的标题",
        "artical_content": "发表动态的内容",
        "aritical_pic_list": [
          {
            "artical_pic_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597056399598&di=742100be69abf7a1b0dbcd3f7f0264a5&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F54a0f7661aa7c.jpg"
          }
        ]
      },
      {
        "_id": "数据库自动生成的字段",
        "_openid": "数据库自动生成的用户的openid字段,也是哪位用户上传的",
        "artical_id": "发表动态的ID号，openid+时间",
        "artical_author_name": "发表动态的作者名",
        "artical_author_url": "发表动态的作者的头像",
        "artical_title": "发表动态的标题",
        "artical_content": "发表动态的内容",
        "aritical_pic_list": [
          {
            "artical_pic_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597056399598&di=5bf46c786e236957fd342f3faa1ba9b4&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F53c4c7a903bc0.jpg"
          }
        ]
      },
      {
        "_id": "数据库自动生成的字段",
        "_openid": "数据库自动生成的用户的openid字段,也是哪位用户上传的",
        "artical_id": "发表动态的ID号，openid+时间",
        "artical_author_name": "发表动态的作者名",
        "artical_author_url": "发表动态的作者的头像",
        "artical_title": "发表动态的标题",
        "artical_content": "发表动态的内容",
        "aritical_pic_list": [
          {
            "artical_pic_url": "./timg.jpg"
          }
        ]
      }
    ],
    time: '',
    currrent_height:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mydate=new Date();
    var week=['日','一','二','三','四','五','六'];
    var month=mydate.getMonth()+1;
    var date=mydate.getDate();
    var day=week[mydate.getDay()];
    var timestring=month+' 月 '+date+' 日,'+' 星'+'期'+day;
    this.setData({
      time:timestring
    })
  },
  onclick: function(event){
    console.log(event.currentTarget.dataset.item)
  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    this.setData({
      starty: py
    })
  },
  scrollTouchmove: function (e) {
    let py = e.touches[0].pageY;
    let d = this.data;
    this.setData({
      endy: py,
    })
    if (py - d.starty < 50 && py - d.starty > -50) {
      this.setData({
        margintop: py - d.starty
      })
    }
  },
  scrollTouchend: function (e) {
    this.setData({
      starty: 0,
      endy: 0,
      margintop: 0
    })
  },
  showimages:function(){
    console.log(this.data.images)
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