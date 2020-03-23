Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [
      { title: '风寒感冒', name: 'fhgm'},
      { title: '风热感冒', name: 'frgm' },
      { title: '暑湿感冒', name: 'ssgm'},
      { title: '气虚感冒', name: 'qxgm'},
    ],
  },
  methods: {
    //事件处理函数
    bindViewItem: function (e) {
      wx.navigateTo({
        url: '../yyzd/yyzd?title=' + e.currentTarget.dataset.item.title + '&name=' + e.currentTarget.dataset.item.name
      })
    }
  }
})