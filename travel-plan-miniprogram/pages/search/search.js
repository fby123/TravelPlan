Page({
  data: {
    keyword: '',
    daysOptions: ['全部', '1天', '2天', '3天', '4天', '5天', '6天', '7天'],
    daysIndex: 0,
    peopleOptions: ['全部', '独自', '情侣', '亲子', '家庭', '朋友'],
    peopleIndex: 0,
    interestOptions: ['全部', '自然景观', '人文古迹', '美食探店', '网红打卡', '休闲度假'],
    interestIndex: 0,
    budgetOptions: ['全部', '低', '中', '高'],
    budgetIndex: 0,
    strategies: [
      {
        title: '北京3日精华游',
        days: 3,
        people: '情侣',
        budget: '中',
        views: 1234,
        desc: '涵盖故宫、长城、颐和园等经典景点，适合情侣出游',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beijing%20travel%20guide&image_size=landscape_4_3'
      },
      {
        title: '上海2日网红打卡',
        days: 2,
        people: '独自',
        budget: '低',
        views: 987,
        desc: '打卡外滩、陆家嘴、田子坊等网红景点',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%20travel%20guide&image_size=landscape_4_3'
      },
      {
        title: '杭州2日西湖休闲',
        days: 2,
        people: '家庭',
        budget: '中',
        views: 765,
        desc: '西湖周边景点游览，适合家庭出游',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hangzhou%20travel%20guide&image_size=landscape_4_3'
      }
    ]
  },
  
  onLoad(options) {
    if (options.keyword) {
      this.setData({
        keyword: options.keyword
      })
      this.onSearch()
    }
  },
  
  onSearchInput(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  
  onSearch() {
    // 模拟搜索功能
    console.log('搜索关键词:', this.data.keyword)
    // 实际项目中这里会调用API获取搜索结果
  },
  
  onDaysChange(e) {
    this.setData({
      daysIndex: e.detail.value
    })
  },
  
  onPeopleChange(e) {
    this.setData({
      peopleIndex: e.detail.value
    })
  },
  
  onInterestChange(e) {
    this.setData({
      interestIndex: e.detail.value
    })
  },
  
  onBudgetChange(e) {
    this.setData({
      budgetIndex: e.detail.value
    })
  },
  
  onFilter() {
    // 模拟筛选功能
    console.log('筛选条件:', {
      days: this.data.daysOptions[this.data.daysIndex],
      people: this.data.peopleOptions[this.data.peopleIndex],
      interest: this.data.interestOptions[this.data.interestIndex],
      budget: this.data.budgetOptions[this.data.budgetIndex]
    })
    // 实际项目中这里会调用API获取筛选结果
  },
  
  goToDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  }
})