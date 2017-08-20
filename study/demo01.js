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

}
demo02()
