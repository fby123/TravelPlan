Page({
  data: {
    loading: true,
    searchText: '',
    hotDestinations: [
      {
        title: '北京',
        desc: '帝都文化之旅',
        tag: '文化古迹',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beijing%20Forbidden%20City&image_size=landscape_4_3'
      },
      {
        title: '上海',
        desc: '魔都现代风情',
        tag: '都市繁华',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%20Bund%20skyline&image_size=landscape_4_3'
      },
      {
        title: '杭州',
        desc: '西湖风光无限',
        tag: '自然风光',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hangzhou%20West%20Lake&image_size=landscape_4_3'
      },
      {
        title: '成都',
        desc: '美食休闲之都',
        tag: '美食之旅',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chengdu%20panda&image_size=landscape_4_3'
      },
      {
        title: '西安',
        desc: '千年古都探秘',
        tag: '历史文化',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xian%20Terracotta%20Army&image_size=landscape_4_3'
      },
      {
        title: '三亚',
        desc: '阳光沙滩海浪',
        tag: '海滨度假',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sanya%20beach&image_size=landscape_4_3'
      }
    ],
    hotStrategies: [
      {
        title: '北京3日精华游',
        desc: '故宫、长城、颐和园，感受帝都文化魅力',
        days: 3,
        people: '情侣',
        views: 1234,
        level: '经典',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beijing%20travel%20guide&image_size=landscape_4_3'
      },
      {
        title: '上海2日网红打卡',
        desc: '外滩、新天地、田子坊，体验魔都时尚',
        days: 2,
        people: '独自',
        views: 987,
        level: '网红',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%20travel%20guide&image_size=landscape_4_3'
      },
      {
        title: '杭州西湖一日游',
        desc: '西湖十景，断桥残雪，感受江南韵味',
        days: 1,
        people: '家庭',
        views: 756,
        level: '轻松',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hangzhou%20travel%20guide&image_size=landscape_4_3'
      }
    ]
  },
  
  onLoad() {
    // 页面加载时初始化数据
    console.log('首页加载')
    // 模拟加载延迟
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 800)
  },
  
  onSearchInput(e) {
    this.setData({
      searchText: e.detail.value
    })
  },
  
  onSearch() {
    if (this.data.searchText) {
      wx.navigateTo({
        url: `/pages/search/search?keyword=${this.data.searchText}`
      })
    }
  },
  
  goToDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  
  goToGenerate() {
    wx.navigateTo({
      url: '/pages/generate/generate'
    })
  },
  
  goToRoute() {
    wx.navigateTo({
      url: '/pages/route/route'
    })
  },
  
  goToCollection() {
    wx.navigateTo({
      url: '/pages/profile/profile?tab=collection'
    })
  },
  
  goToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    })
  },
  
  goToStrategyDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  
  viewMore() {
    wx.navigateTo({
      url: '/pages/search/search?type=destination'
    })
  },
  
  viewMoreStrategies() {
    wx.navigateTo({
      url: '/pages/search/search?type=strategy'
    })
  }
})