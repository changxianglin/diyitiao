var log = console.log.bind(console)
var zhourongAlert = function() {
  var self = this
  var e = function(selector) {
    var element = document.querySelector(selector)
    return element
  }

  var width = window.screen.width
  var height = window.screen.height
  var style = "width: ${width}px; height: ${height}px;"
  var insert = e('div')
  var event = e('h1')
  event.addEventListener('click', function() {
    var div =  `<div class = "alert"><p class = "content">这是弹出层</p></div>`
    insert.insertAdjacentHTML('beforeend', div)
    self.hide()
  })

  self.hide = function() {
    var bar = e('.alert')
    bar.addEventListener('click', function() {
      bar.parentNode.removeChild(bar)
    })
  }

}

var __main = function() {
  var init = new zhourongAlert()
}

__main()
