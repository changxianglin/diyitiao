// "use strict"
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
