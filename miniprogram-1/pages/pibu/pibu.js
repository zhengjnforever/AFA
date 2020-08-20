// pages/pibu/pibu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shares_list:[
      {
        name: '大脸猫爱吃鱼',
        heart_num: '1',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '2',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '3',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '6',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ],
    collect_list:[
      {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '6',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: './timg.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ],
    sendList: [],
    navTab: ['./aa.png','./aa.png'],        
    currentTab: 0,
    select: {
      page: 1,
      size: 6,
      isEnd: false
    },
    msg1:'1'
    
      
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    
    
  },
  currentTab: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if(this.data.currentTab==0){
      this.data.sendList=[]
      this.setData({
        sendList: this.data.shares_list
      })
    }else{
      if(this.data.collect_list.length==0){
        console.log('加载collect数据')
      }
      this.data.sendList=[]
      this.setData({
        
        sendList: this.data.collect_list
      })
      
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.shares_list.length==0){
      console.log('第一次进页面加载shares_list')
      
    }
    this.setData({
      sendList: this.data.shares_list
    })


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示show：更新当前页面的全部数据')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏')
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