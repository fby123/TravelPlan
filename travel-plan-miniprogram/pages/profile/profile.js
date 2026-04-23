Page({
  data: {
    userInfo: {
      nickName: '',
      avatarUrl: '',
      bio: ''
    }
  },
  
  onLoad(options) {
    // 加载用户信息
    this.loadUserInfo()
  },
  
  loadUserInfo() {
    const app = getApp()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  
  login() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: res => {
        const userInfo = res.userInfo
        this.setData({
          userInfo: {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
            bio: this.data.userInfo.bio
          }
        })
        // 保存到全局变量
        getApp().globalData.userInfo = this.data.userInfo
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      },
      fail: err => {
        console.error('登录失败:', err)
      }
    })
  },
  
  logout() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: res => {
        if (res.confirm) {
          this.setData({
            userInfo: {
              nickName: '',
              avatarUrl: '',
              bio: ''
            }
          })
          // 清除全局变量
          getApp().globalData.userInfo = null
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
        }
      }
    })
  },
  
  goToMyStrategies() {
    wx.navigateTo({
      url: '/pages/detail/detail?type=my'
    })
  },
  
  goToCollection() {
    wx.navigateTo({
      url: '/pages/detail/detail?type=collection'
    })
  },
  
  goToHistory() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },
  
  clearCache() {
    wx.clearStorageSync()
    wx.showToast({
      title: '缓存已清除',
      icon: 'success'
    })
  },
  
  goToAbout() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },
  
  goToFeedback() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
})