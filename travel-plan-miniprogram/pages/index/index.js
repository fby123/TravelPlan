Page({
  data: {
    searchText: '',
    hotDestinations: [
      {
        title: '北京',
        desc: '帝都文化之旅',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beijing%20Forbidden%20City%20landscape&image_size=landscape_4_3'
      },
      {
        title: '上海',
        desc: '魔都现代风情',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%20skyline%20with%20Huangpu%20River&image_size=landscape_4_3'
      },
      {
        title: '杭州',
        desc: '西湖风光无限',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hangzhou%20West%20Lake%20scenery&image_size=landscape_4_3'
      }
    ],
    hotStrategies: [
      {
        title: '北京3日精华游',
        days: 3,
        people: '情侣',
        views: 1234,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beijing%20travel%20guide&image_size=landscape_4_3'
      },
      {
        title: '上海2日网红打卡',
        days: 2,
        people: '独自',
        views: 987,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%20网红打卡%20places&image_size=landscape_4_3'
      }
    ]
  },
  
  onLoad() {
    // 页面加载时初始化数据
    console.log('首页加载')
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
  
  goToStrategyDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  }
})