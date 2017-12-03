#### Javascript 面向对象和原型
* [学习链接](https://ke.qq.com/webcourse/index.html#course_id=186871&term_id=100221347&taid=1383795513285111&vid=y1419g4c24e)

* 闭包和作用域
  ```
  var num = 10
  var fun = function() {
    console.log(num) // undefined

    var num = 20

    console.log(num) // 20
  }

  fun()
  ```
  + 可以在函数外部访问内部的变量
  + 保存变量 不被垃圾机制回收
  
