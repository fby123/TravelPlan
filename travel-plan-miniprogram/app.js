App({
  onLaunch() {
    // 初始化百度地图API
    this.initBaiduMap()
    
    // 登录获取用户信息
    this.login()
  },
  
  initBaiduMap() {
    // 百度地图API初始化配置
    console.log('初始化百度地图API')
  },
  
  login() {
    wx.login({
      success: res => {
        if (res.code) {
          // 发送code到后端换取openid等信息
          console.log('登录成功，code:', res.code)
        } else {
          console.error('登录失败:', res.errMsg)
        }
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  },
  
  globalData: {
    userInfo: null,
    baiduMapKey: 'your_baidu_map_api_key',
    aiApiKey: 'your_ai_api_key'
  }
})