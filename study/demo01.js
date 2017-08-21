// "use strict"
var dem01 = function() {
    var log = function() {
        return console.log.apply(console, arguments)
    }
    log("function")

    function sum (num1, num2) {
        return num1 + num2
    }
    var sum = function(num1, num2) {
        return num1 + num2
    }

    // var sum = new Function("num1", "num2", "return num1 + num2")

    function sum(num1, num2) {
        return num1 + num2
    }
    log("funciton", sum(10, 10))

    var anotherSum = sum
    log(anotherSum(10, 10))

    sum = null
    log(anotherSum(10, 10))

    function addSomeNumber(num) {
        return num + 10
    }

    function addSomeNumber(num) {
        return num + 200
    }

    var result = addSomeNumber(100)
    log(result)

    var addSomeNumber = function (num) {
        return num + 100
    }

    addSomeNumber = function (num) {
        return num + 200
    }

    var result = addSomeNumber(100)
    log(result)

    log(sums(10, 10))
    function sums(num1, num2) {
        return num1 + num2
    }

    // log(summs(10, 10))
    var summs = function(num1, num2) {
        return num1 + num2
    }

    function callSomeFunction(someFunction, someArgument) {
        return someFunction(someArgument)
    }

    function add10(num) {
        return num + 10
    }

    var result = callSomeFunction(add10, 10)
    log("result", result)

    function getGreeting(name) {
        return "Hello, " + name
    }

    var result2 = callSomeFunction(getGreeting, "Nicholas")
    log("result2", result2)

    function createComparisonFunction(propertyName) {

        return function(object1, object2) {
            var value1 = object1[propertyName]
            var value2 = object2[propertyName]

            if (value1 < value2) {
                return -1
            } else if (value1 > value2) {
                return 1
            } else {
                return 0
            }
        }
    }

    var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29},]

    data.sort(createComparisonFunction("name"))
    log(data[0].name)

    data.sort(createComparisonFunction("age"))
    log(data[0].name)

    function factorial(num) {
        if (num < 1) {
            return 1
        } else {
            return num * factorial(num -1)
        }
    }
    log(factorial(10))

    function factorial(num) {
        if (num <= 1) {
            return 1
        } else {
            return num * arguments.callee(num -1)
        }
    }
    log(factorial(2))

    var trueFactorial = factorial
    factorial = function() {
        return 0
    }
    log(trueFactorial(5))
    log(factorial(5))


    window.color = "red"
    var o = {color: "blue"}
    function sayColor() {
        log(this.color)
    }
    sayColor()

    o.sayColor = sayColor // this 的上下文已经改变
    o.sayColor()

    function outer() {
        inner()
    }

    function inner() {
        log(inner.caller)
    }

    outer()

    function outer() {
        inner()
    }

    function inner() {
        log(arguments.callee.caller)
    }
    outer()

    // 函数属性和方法 1.length 2.prototype

    function sayName(name) {
        log(name)
    }

    function summer(num1, num2) {
        return num1 + num2
    }

    function sayHi() {
        log("hi")
    }
    log("function.lenght",sayName.length)
    log(summer.length)
    log(sayHi.length)

    function summ(num1, num2) {
        return num1 + num2
    }

    function callSum1(num1, num2) {
        return summ.apply(this, arguments)
    }

    function callSum2(num1, num2) {
        return summ.apply(this, [num1, num2])
    }

    log(callSum1(10, 10))
    log(callSum2(10, 10))

    function sumer(num1, num2) {
        return num1 + num2
    }

    function callSum(num1, num2) {
        return sumer.call(this, num1, num2)
    }

    log("call", callSum(10, 10))

    window.color = "red"
    var o = {color : "blue"}

    function sayColor() {
        log(this.color)
    }

    sayColor()
    log("call this")
    sayColor.call(this)
    sayColor.call(window)
    sayColor.call(o)

    window.color = "red"
    var o = { color: "blue"}

    function sayColor() {
        log(this.color)
    }

    var objectSayColor = sayColor.bind(o)
    objectSayColor()


    // 基本包装类型

    var s1 = "some text"
    var s2 = s1.substring(2)
    log(s2)

    var s1 = "some text"
    s1.color = "red"
    log(s1.color)

    var obj = new Object("some text")
    log(obj instanceof String)

    var value = "25"
    var number = Number(value)
    log(typeof number)

    var obj = new Number(value)
    log(typeof obj)

    var booleanObject = new Boolean(true)

    var falseObject = new Boolean(false)
    var result = falseObject && true
    log("boolean", result)

    var falseValue = false
    result = falseValue && true
    log(result)

    log("typeof && instaceof ")
    log(typeof falseObject)
    log(typeof falseValue)
    log(falseObject instanceof Boolean)
    log(falseValue instanceof Boolean)

    var numberObject = new Number(10)

    log("Number 类型  ")
    var num = 10
    log(num.toString())
    log(num.toString(2))
    log(num.toString(8))
    log(num.toString(10))
    log(num.toString(16))

    var num = 10
    log(num.toFixed(2))
    log(typeof num.toFixed(2))

    var num = 10
    log(num.toExponential(1))
    log(num.toExponential(2))
    log(num.toExponential(3))

    var numberObject = new Number(10)
    var numberValue = 10
    log(typeof numberObject)
    log(typeof numberValue)
    log(numberObject instanceof Number)
    log(numberValue instanceof Number)
    // 2017.08.21
}

var demo02 = function() {
    // 2017.08.21
    var log = function() {
        return console.log.apply(console, arguments)
    }
    log("2017.08.21")
    //
    // String 类型
    var stringObject = new String("Hello world")

    var StringValue = "hello world"
    log(StringValue.length)

    var stringValue = "hello world"
    log("字符", stringValue.charAt(1))
    log("编码", stringValue.charCodeAt(1))

    var stringValue = "hello world"
    log(stringValue[1])

    var stringValue = "hello "
    var result = stringValue.concat("world")
    log(result)
    log(stringValue)

    var stringValue = "hello "
    var result = stringValue.concat("world", " !")
    log(result)
    log(stringValue)


    var stringValue = "hello world"
    log(stringValue.slice(3))
    log(stringValue.substring(3))
    log(stringValue.substr(3))
    log(stringValue.slice(3, 7))
    log(stringValue.substring(3, 7))
    log(stringValue.substr(3, 7))

    var stringValue = "hello world"
    log(stringValue.slice(-3))
    log(stringValue.substring(-3))
    log(stringValue.substr(-3))
    log(stringValue.slice(3, -4))
    log(stringValue.substring(3, -4))
    log(stringValue.substr(3, 7))

    var stringValue = "hello world"
    log("indexOf", stringValue.indexOf("o"))
    log(stringValue.lastIndexOf("o"))

    var stringValue = "hello world"
    log(stringValue.indexOf("o", 6))
    log(stringValue.lastIndexOf("o", 6))

    var stringValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    var positions = new Array()
    var pos = stringValue.indexOf("e")
    while (pos > -1) {
        positions.push(pos)
        pos = stringValue.indexOf("e", pos + 1)
    }
    log(positions)

    var stringValue = "  hello world   "
    var trimmeStringValue = stringValue.trim()
    log(stringValue)
    log(trimmeStringValue)

    // 大小写转换
    var stringValue = "hello world"
    log(stringValue.toLocaleUpperCase())
    log(stringValue.toUpperCase())
    log(stringValue.toLocaleLowerCase())
    log(stringValue.toLowerCase())

    // 字符串匹配方法
    var text = "cat, bat, sat, fat"
    var pos = text.search(/at/)
    log(pos)

    var result = text.replace("at", "ond")
    log(result)

    var result = text.replace(/at/g, "ond")
    log(result)

    var colorText = "red, blue, green, yellow"
    var colors1 = colorText.split(",")
    var colors2 = colorText.split(",", 2)
    log(colors1)
    log(colors2)

    var stringValue = "yellow"
    log(stringValue.localeCompare("brick"))
    log(stringValue.localeCompare("yellow"))
    log(stringValue.localeCompare("zoo"))

    function determineOrder(value) {
        var result = stringValue.localeCompare(value)
        if (result < 0) {
            log("The string 'yellow' comes before the string ")
        } else if (result > 0) {
            log("The string 'yellow' come after")
        } else {
            log(("The string 'yellow' is equal to the string"))
        }
    }
    determineOrder("brick")
    determineOrder("yellow")
    determineOrder("zoo")

    log(String.fromCharCode(104, 101, 108, 108, 111))

    log("global")
    var uri = "http://www.wrox.com/illegal value.htm#start"
    log(encodeURI(uri))
    log(encodeURIComponent(uri))

    // eval strong
    eval("log('hi')")

    var msg = "hello world"
    eval("log(msg)")

    eval("function sayHi() { log('HI')}")
    sayHi()

    eval("var msg = 'hello world'")
    log(msg)

    // var color = "red"
    // function sayColor() {
    //     log(window.color)
    // }
    // window.sayColor()

    var max = Math.max(3, 54, 32, 16)
    log(max)

    var min = Math.min(3, 54, 32, 16)
    log(min)

    var values = [1, 2, 3, 4, 5, 6, 7, 8]
    var max = Math.max.apply(Math, values)
    log(max)

    log("ceil")
    log(Math.ceil(25.9))
    log(Math.ceil(25.4))
    log(Math.ceil(25.1))

    log("round")
    log(Math.round(25.9))
    log(Math.round(25.4))
    log(Math.round(25.1))

    log("floor")
    log(Math.floor(25.9))
    log(Math.floor(25.4))
    log(Math.floor(25.1))

    log("random")

    // 值 = Math.floor(Math.random() * 可能值得总数 + 第一个可能的值)
    var numm = Math.floor(Math.random() * 10 + 1)
    log(numm)

    var num = Math.floor(Math.random() * 9 + 2)
    log(num)

    function selecFrom(lowerValue, upperValue) {
        var choices = upperValue - lowerValue + 1
        return Math.floor(Math.random() * choices + lowerValue)
    }

    var num = selecFrom(2, 10)
    log(num)

    var colors = [ "red", "green", "blue", "yellow", "black", "purple", "brown"]
    var color = colors[selecFrom(0, colors.length - 1)]
    log(color)

}
demo02()
