Page({
  data: {
    strategy: {
      title: '北京3日精华游',
      meta: '3天 | 情侣 | 中预算 | 人文古迹',
      days: [
        {
          activities: [
            '上午：抵达北京，办理入住',
            '下午：游览故宫博物院',
            '晚上：品尝北京烤鸭'
          ]
        },
        {
          activities: [
            '上午：参观八达岭长城',
            '下午：游览颐和园',
            '晚上：逛王府井大街'
          ]
        },
        {
          activities: [
            '上午：游览天坛公园',
            '下午：参观恭王府',
            '晚上：返程'
          ]
        }
      ],
      attractions: [
        {
          name: '故宫博物院',
          desc: '中国明清两代的皇家宫殿，世界上现存规模最大、保存最为完整的木质结构古建筑之一。',
          openTime: '8:30-17:00',
          ticket: '60元/人',
          image: '/images/destination-beijing.jpg'
        },
        {
          name: '八达岭长城',
          desc: '中国最具代表性的长城段落之一，以其宏伟的建筑和壮丽的自然风光闻名。',
          openTime: '7:30-18:00',
          ticket: '40元/人',
          image: '/images/destination-beijing.jpg'
        }
      ],
      food: [
        {
          name: '北京烤鸭',
          desc: '北京特色美食，皮脆肉嫩，搭配葱丝、黄瓜和甜面酱食用。'
        },
        {
          name: '炸酱面',
          desc: '北京传统面食，以面条拌炸酱食用，风味独特。'
        }
      ],
      notes: '出行注意事项：\n1. 带好身份证等证件\n2. 北京天气干燥，注意补水\n3. 故宫、长城等景点需提前预约\n4. 高峰时段交通拥堵，建议提前规划行程'
    },
    isCollected: false
  },
  
  onLoad(options) {
    // 根据传入的类型加载不同的攻略数据
    if (options.type === 'my') {
      console.log('加载我的攻略')
    } else if (options.type === 'collection') {
      console.log('加载收藏的攻略')
    }
  },
  
  collectStrategy() {
    this.setData({
      isCollected: !this.data.isCollected
    })
    wx.showToast({
      title: this.data.isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },
  
  shareStrategy() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  
  onShareAppMessage() {
    return {
      title: this.data.strategy.title,
      path: '/pages/detail/detail',
      imageUrl: this.data.strategy.attractions[0].image
    }
  },
  
  onShareTimeline() {
    return {
      title: this.data.strategy.title,
      imageUrl: this.data.strategy.attractions[0].image
    }
  }
})