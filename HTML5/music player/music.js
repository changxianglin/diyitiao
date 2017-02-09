// const play = document.querSelector(".play-cell")
// var pl = document.querySelector('#dataset-1')
var pla = function() {
  let pl = document.querySelector('#dataset-1')
  pl.play()
  pl.playbackRate = 1
  pl.volume = 0.4
}
var pau = function () {
  let pl = document.querySelector('#dataset-1')
  pl.pause()
}
var p = function() {
  var p = document.querySelector('.play-cell')
  p.addEventListener('click', function() {
    console.log('play');
    if (parseInt(pau())==1) {
      pla()
    } else {
      pau()
    }
  })
}
p()



// // var p = document.querySelector('#music')
// // var pl = function() {
// //   p.play()
// //   console.log('plays');
// //   p.volume = 0.4
// // }
// // pl()
//
//
// var pl = document.querySelector('#y')
// var play = function() {
//   pl.play()
//   pl.playbackRate = 1
//   pl.volume = 0.4
// }
// //播放
// var plays = function() {
//   var pla = document.querySelector('#b')
//   pla.addEventListener('click', function() {
//     console.log('play');
//   play()
//   })
// }
// plays()
// //暂停
// var pause = function() {
//   var pa = document.querySelector('#p')
//   pa.addEventListener('click', function() {
//     console.log('pause');
//     pl.pause()
//   })
// }
// pause()
// //2倍速
// var second = function() {
//   var px = document.querySelector('#s')
//   px.addEventListener('click', function() {
//     console.log('2px');
//     pl.playbackRate = 2
//   })
// }
// second()
// //2.5倍速
// var dboule = function() {
//   var pxx = document.querySelector('#d')
//   pxx.addEventListener('click', function() {
//     console.log('2.5sx');
//     pl.playbackRate = 2.5
//   })
// }
// dboule()
// //3倍速
// var third = function() {
//   var pxxx = document.querySelector('#t')
//   pxxx.addEventListener('click', function() {
//     console.log('3sx');
//     pl.playbackRate = 3
//   })
// }
// third()
