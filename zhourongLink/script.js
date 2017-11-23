var log = console.log.bind(console)

var zhourongLink = function() {
  var self = this

  var provice = document.querySelector('.province')
  var city = document.querySelector('.city')
  var areaP = [
    ['选择省'],
    ["广东"],
    ["广西"],
    ["湖南"],
    ['江西'],
    ['福建'],
    ['浙江'],
    ['台湾'],
    ['上海'],
    ['江苏'],
    ['安徽'],
    ['河南'],
    ['湖北'],
    ['贵州'],
    ['重庆'],
    ['四川'],
    ['云南'],
    ['西藏'],
    ['新疆'],
    ['青海'],
    ['陕西'],
    ['甘肃'],
    ['宁夏'],
    ['内蒙古'],
    ['山西'],
    ['河北'],
    ['山东'],
    ['天津'],
    ['北京'],
    ['辽宁'],
    ['吉林'],
    ['黑龙江'],
    ['海南'],
    ['澳门'],
    ['香港'],
  ]
  var  areaC = [
    ['选择城市'],
    ['广州', '深圳', '东莞', '珠海', '惠州'],
    ['南宁', '桂林', '贺州', '梧州', '玉林'],
    ['长沙', '株洲', '湘潭', '岳阳', '衡阳'],
    ['南昌', '九江', '鹰潭'],
    ['福州', '泉州', '厦门'],
    ['杭州', '绍兴', '嘉兴'],
    ['台北', '高雄', '新竹'],
    ['浦东', '闵行', '嘉定'],
    ['南京', '苏州', '常州'],
    ['合肥', '阜阳', '黄山'],
    ['开封', '郑州', '洛阳'],
    ['武汉', '荆州', '襄阳'],
    ['贵阳', '六盘水', '遵义'],
    ['渝中', '万州', '江北'],
    ['成都', '绵阳', '乐山'],
    ['昆明', '大理', '丽江'],
    ['拉萨', '林芝', '那曲'],
    ['迪化', '哈密', '和田'],
    ['西宁', '玉树', '黄南'],
    ['西安', '咸阳', '宝鸡'],
    ['兰州', '张掖', '酒泉'],
    ['银川', '中卫', '吴忠'],
    ['包头', '赤峰', '通辽'],
    ['大同', '阳泉', '长治'],
    ['石家庄', '保定', '邯郸'],
    ['济南', '秦皇岛', '烟台'],
    ['和平', '河东', '东丽'],
    ['海定', '朝阳', '望京'],
    ['大连', '沈阳', '鞍山'],
    ['长春', '四平', '松原'],
    ['哈尔滨', '黑河', '五常'],
    ['三亚', '海口', '文昌'],
    ['花地玛', '大堂', '望德'],
    ['九龙', '屯门', '中环'],
  ]
     self.initP = function() {
      for (var i = 0; i < areaP.length; i++) {
        var html = `<option value = "${i}">${areaP[i]}</option>`
        provice.insertAdjacentHTML('beforeend', html)
      }
    }

      self.initC = function(num) {
      for (var i = 0; i < areaC[num].length; i++) {
        var html = `<option value = "${i}">${areaC[num][i]}</option>`
        city.insertAdjacentHTML('beforeend', html)
      }
    }

      self.setC = function(num) {
      city.innerHTML = ''
      for (var i = 0; i < areaC[num].length; i++) {
        var html = `<option value = "${i}">${areaC[num][i]}</option>`
        city.insertAdjacentHTML('beforeend', html)
      }
    }

      self.changeP = function() {
          provice.addEventListener('change', function() {
            var num = Number(provice.value)
            self.setC(num)
          })
      }
}

var  __main = function() {
  var init = new zhourongLink()
  var num = 0
    init.initP()
    init.initC(num)
    init.changeP()
}
__main()
