Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    title:'',
    name:'',
    elements: [
      { title: '感冒清热颗粒', name: 'gmqrkl'},
      { title: '通宣理肺丸(口服液)', name: 'txlfw' },
      { title: '正柴胡饮颗粒', name: 'zchykl'},
      { title: '感冒软胶囊', name: 'gmrjn'}
    ],
    elements1: [
      { title: '参苏宣肺丸', name: 'csxfw' }
    ],
    elements2: [
      { title: '桑菊感冒片', name: 'sjgmp' },
      { title: '银翘解毒丸(片、颗粒)', name: 'yqjdw' },
      { title: '羚翘解毒丸(片)', name: 'lqjdw' },
      { title: '板蓝根颗粒', name: 'blgkl' },
      { title: '维C银翘片', name: 'wcyqp' }
    ],
    elements3: [
      { title: '藿香正气软胶囊(水)', name: 'hqzqrjn' }
    ],
  },
  methods: {
    onLoad: function (options) {
      this.data.order = options.order
      this.setData({
        title: options.title,
        name: options.name
      })
    },
      //事件处理函数
    bindViewItem: function (e) {
      wx.navigateTo({
        url: '../ypxq/ypxq?title=' + e.currentTarget.dataset.item.title + '&name=' + e.currentTarget.dataset.item.name
      })
    }
  }
})