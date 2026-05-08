Page({
  data: {
    routeTypes: ['步行', '公交', '自驾', '骑行'],
    currentType: 0,
    longitude: 116.404,
    latitude: 39.915,
    startPoint: '',
    endPoint: '',
    markers: [],
    polyline: [],
    routeDetail: []
  },
  
  onLoad() {
    // 初始化地图
    this.initMap()
    // 获取当前位置
    this.getCurrentLocation()
  },
  
  initMap() {
    // 实际项目中这里会初始化百度地图API
    console.log('初始化地图')
  },
  
  switchRouteType(e) {
    this.setData({
      currentType: parseInt(e.currentTarget.dataset.index)
    })
  },
  
  onStartInput(e) {
    this.setData({
      startPoint: e.detail.value
    })
  },
  
  onEndInput(e) {
    this.setData({
      endPoint: e.detail.value
    })
  },
  
  getCurrentLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        // 实际项目中这里会通过逆地理编码获取地址
        this.setData({
          startPoint: '当前位置'
        })
      },
      fail: err => {
        console.error('获取位置失败:', err)
      }
    })
  },
  
  planRoute() {
    if (!this.data.startPoint || !this.data.endPoint) {
      wx.showToast({
        title: '请输入起点和终点',
        icon: 'none'
      })
      return
    }
    
    // 模拟路线规划
    console.log('规划路线:', {
      start: this.data.startPoint,
      end: this.data.endPoint,
      type: this.data.routeTypes[this.data.currentType]
    })
    
    // 模拟路线数据
    this.setData({
      markers: [
        {
          id: 0,
          longitude: 116.404,
          latitude: 39.915,
          title: '起点',
          iconPath: ''
        },
        {
          id: 1,
          longitude: 116.418,
          latitude: 39.914,
          title: '终点',
          iconPath: ''
        }
      ],
      polyline: [
        {
          points: [
            { longitude: 116.404, latitude: 39.915 },
            { longitude: 116.410, latitude: 39.914 },
            { longitude: 116.418, latitude: 39.914 }
          ],
          color: '#4A90E2',
          width: 4
        }
      ],
      routeDetail: [
        '从起点出发，向东步行200米',
        '左转进入建国路，步行300米',
        '右转进入长安街，步行500米到达终点'
      ]
    })
  },
  
  onMarkerTap(e) {
    console.log('点击标记:', e)
  },
  
  onRegionChange(e) {
    console.log('地图区域变化:', e)
  }
})