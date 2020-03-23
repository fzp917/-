Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    title: '',
    name: '',
    elements: [
      { title: '感冒清热颗粒', name: 'gmqrkl', image: '../../static/page01.png', image1: '', image2: '', zycf: '荆芥穗、薄荷、防风、柴胡、紫苏叶、葛根、桔梗、苦杏仁、白芷、苦地丁、芦根。', gg: '每包6g', yf: '每次1包，每日2次' }
    ],
    elements1: [
      { title: '通宣理肺丸(口服液)', name: 'txlfw', image: '../../static/page08.png', image1: '../../static/page09.png', image2: '', zycf: '苏叶、麻黄、葛根、前胡、苦杏仁、枳壳、陈皮、法半夏、茯苓、桔梗、黄芩、甘草', gg: '蜜丸，每丸6g；口服液，每支10mL。', yf: '蜜丸，每次1丸，每日2~3次；口服液，每次1支，每日2~3次。' }
    ],
    elements2: [
      { title: '正柴胡饮颗粒', name: 'zchykl', image: '../../static/page10.png', image1: '', image2: '', zycf: '柴胡、陈皮、防风、赤芍、甘草、生姜。', gg: '每包3g', yf: '每次1包,每日3次' }
    ],
    elements3: [
      { title: '感冒软胶囊', name: 'gmrjn', image: '../../static/page02.png', image1: '', image2: '', zycf: '羌活、麻黄、桂枝、防风、白芷、川芎、菖蒲、葛根、薄荷、杏仁、当归、黄芩、桔梗。', gg: '每粒0.425g', yf: '每次2~4粒，每日2次。' }
    ],
    elements4: [
      { title: '参苏宣肺丸', name: 'csxfw', image: '../../static/page03.png', image1: '', image2: '', zycf: '人参、紫苏叶、葛根、前胡、枳壳、桔梗、木香、陈皮、茯苓、法半夏、党参、甘草。', gg: '水丸，每包6g。', yf: '每次1包，每日3次。' }
    ],
    elements5: [
      { title: '桑菊感冒片', name: 'sjgmp', image: '../../static/page11.png', image1: '', image2: '', zycf: '桑叶、菊花、薄荷、连翘、苦杏仁、桔梗、芦根、甘草。', gg: '每片0.6g。', yf: '每次4~8片,每日2~3次。' }
    ],
    elements6: [
      { title: '银翘解毒丸(片、颗粒)', name: 'yqjdw', image: '../../static/page12.png', image1: '../../static/page04.png', image2: '../../static/page05.png',  zycf: '金银花、连翘、荆芥穗、薄荷、淡豆豉、牛蒡子、桔梗、淡竹叶、甘草。', gg: '蜜丸，每丸9g；片剂，每片0.52g；颗粒，每袋15g。', yf: '蜜丸，每次1~2丸，每日2次；片剂，每次4片，每日2~3次；颗粒，每次1袋，每日3次。' }
    ],
    elements7: [
      { title: '羚翘解毒丸(片)', name: 'lqjdw', image: '../../static/page06.png', image1: '../../static/page07.png', image2: '', zycf: '金银花、连翘、荆芥穗、薄荷、淡豆豉、牛蒡子、桔梗、淡竹叶、甘草、羚羊角。', gg: '蜜丸，每丸9g；片剂，每片0.55g。', yf: '蜜丸，每次1~2丸，每日2次；片剂，每次4片，每日2~3次。' }
    ],
    elements8: [
      { title: '板蓝根颗粒', name: 'blgkl', image: '../../static/page17.png', image1: '', image2: '', zycf: '板蓝根，辅料为糊精、蔗糖。', gg: '每袋10g。', yf: '每次5~10g，每日3~4次。' }
    ],
    elements9: [
      { title: '维C银翘片', name: 'wcyqp', image: '../../static/page18.png', image1: '', image2: '', zycf: '山银花，连翘，荆芥，淡豆豉，淡竹叶，牛蒡子，芦根，桔梗等，甘草，马来酸氯苯那敏，对乙酰氨基酚，维生素C，薄荷素油。', gg: '每片含维生素C49.5mg，对乙酰氨基酚105mg，马来酸氯苯那敏1.05mg。', yf: '每次2片，每日3次。' }
    ],
    elements10: [
      { title: '藿香正气软胶囊(水)', name: 'hqzqrjn', image: '../../static/page13.png', image1: '../../static/page14.png', image2: '', zycf: '苍术、陈皮、厚朴、白芷、茯苓、大腹皮、生半夏、甘草浸膏、广藿香油、紫苏叶油。', gg: '软胶囊，每粒0.45g；水，每瓶10mL。', yf: '胶囊，每次2~4粒，每日2次；水，每次5~10mL，每日2次' }
    ],
  },
  methods: {
    onLoad: function (options) {
      this.setData({
        title: options.title,
        name: options.name
      })
      console.log(this,'12')
    },
    //事件处理函数
    bindViewItem: function (e) {
      wx.navigateTo({
        url: '../ypxq/ypxq?title=' + e.currentTarget.dataset.item.title + '&name=' + e.currentTarget.dataset.item.name
      })
    }
  }
})