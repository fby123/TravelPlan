Page({
  data: {
    destination: '',
    daysOptions: ['1天', '2天', '3天', '4天', '5天', '6天', '7天'],
    daysIndex: 0,
    peopleOptions: ['独自', '情侣', '亲子', '家庭', '朋友'],
    peopleIndex: 0,
    budgetOptions: ['低', '中', '高'],
    budgetIndex: 0,
    interestOptions: ['自然景观', '人文古迹', '美食探店', '网红打卡', '休闲度假'],
    interestIndex: 0,
    accommodationOptions: ['酒店', '民宿', '青旅'],
    accommodationIndex: 0,
    transportOptions: ['便捷', '省钱', '舒适'],
    transportIndex: 0,
    specialNeeds: '',
    isGenerating: false,
    strategyResult: null
  },
  
  onLoad() {
    console.log('攻略生成页面加载')
  },
  
  onDestinationInput(e) {
    this.setData({
      destination: e.detail.value
    })
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
  
  onBudgetChange(e) {
    this.setData({
      budgetIndex: e.detail.value
    })
  },
  
  onInterestChange(e) {
    this.setData({
      interestIndex: e.detail.value
    })
  },
  
  onAccommodationChange(e) {
    this.setData({
      accommodationIndex: e.detail.value
    })
  },
  
  onTransportChange(e) {
    this.setData({
      transportIndex: e.detail.value
    })
  },
  
  onSpecialNeedsInput(e) {
    this.setData({
      specialNeeds: e.detail.value
    })
  },
  
  generateStrategy() {
    if (!this.data.destination) {
      wx.showToast({
        title: '请输入目的地',
        icon: 'none'
      })
      return
    }
    
    this.setData({
      isGenerating: true
    })
    
    // 模拟API调用延迟
    setTimeout(() => {
      // 模拟生成攻略
      const strategy = {
        title: `${this.data.destination}${this.data.daysOptions[this.data.daysIndex]}${this.data.peopleOptions[this.data.peopleIndex]}游`,
        meta: `${this.data.daysOptions[this.data.daysIndex]} | ${this.data.peopleOptions[this.data.peopleIndex]} | ${this.data.budgetOptions[this.data.budgetIndex]}预算 | ${this.data.interestOptions[this.data.interestIndex]}`,
        days: [
          {
            activities: [
              '上午：抵达目的地，办理入住',
              '下午：游览主要景点',
              '晚上：品尝当地美食'
            ]
          },
          {
            activities: [
              '上午：参观人文古迹',
              '下午：体验当地特色活动',
              '晚上：自由活动'
            ]
          }
        ],
        notes: '出行注意事项：\n1. 带好身份证等证件\n2. 关注天气变化\n3. 提前预订住宿\n4. 注意安全'
      }
      
      this.setData({
        strategyResult: strategy,
        isGenerating: false
      })
    }, 2000)
  },
  
  saveStrategy() {
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    })
  }
})