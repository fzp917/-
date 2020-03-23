//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  setComputed(page) {
    let data = page.data
    let dataKeys = Object.keys(data)
    dataKeys.forEach(dataKey => {
      this.observeComputed(page, page.data, dataKey, page.data[dataKey])
    })
  },
  observeComputed(data, key, val, fn) {
    var dataVal = data[key];
    if (dataVal != null && typeof dataVal === 'object') {
      Object.keys(dataVal).forEach(childKey => { // 遍历val对象下的每一个key
        this.observeComputed(page, dataVal, childKey, dataVal[childKey])
      })
    }
    var that = this;
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        val = newVal
        let computed = page.computed //computed对象，每个值都是函数 
        let keys = Object.keys(computed)
        let firstComputedObj = keys.reduce((prev, next) => {
          page.data.$target = function () {
            page.setData({ [next]: computed[next].call(page) })
          }
          prev[next] = computed[next].call(page)
          page.data.$target = null
          return prev
        }, {})
        page.setData(firstComputedObj)
      }
    })
  }
})