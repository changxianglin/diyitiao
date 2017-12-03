### next 学位 js 进阶
* 对象和实例
* 工厂模式
  + 传入参数返回对象
* arguments
  + 勿滥用，可巧用
* this (执行环境)
  + window (全部作用域)
  + 对象方法 (对象)
* 闭包 (闭包是指有权访问另一个函数作用域中的变量的函数-《javascript 高级程序设计》)
  ```
  var foo = function() {
    var a = 'test'

    var bar = function() {
      console.log(a)
    }

    bar()
  }

  foo()

  带有数据的函数

  var foo = function() {
    var a = 'test'

    var bar = function() {
      return a
    }

    return bar
  }

  var bar = foo()
  bar()
  ```
* 构造函数
  + instanceof (实例)
  + 无显示的创建对象
  + 属性和方法赋值给 this
  + 没有 return 语句
  + 关键在于 new 操作符
* 原型 prototype
  + 原型是函数的一个属性，是一个对象。
* 继承
  + 继承可以使子类具有父类的属性和方法，而不需重复编写相同的代码。
  + 共性(父类)
  + 个性(子类)
* 原型继承的问题
  + constructor 指向问题
    + 手动添加 prototype.constructor 指向
  + 属性共享问题
  + 参数
* Canvas
  + 坐标
  + 矩形
    + context.fillReact(x, y, 宽， 高) (实心矩形)
    + context.strokeReact(x, y, 宽， 高) (空心矩形)
  + 线条
  + 擦除 Canvas
  + 加载图像
  + JS 里的动画
