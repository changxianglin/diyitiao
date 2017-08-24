var log = function() {
    return console.log.apply(console, arguments)
}
var demo00 = function() {
        log("*** function  ****")

        function functionName(arg0, arg1, arg2) {

        }
        log(functionName.name)

        sayHi()
        function sayHi() {
            log("Hi")
        }


}
// demo00()

var demo01 = function() {
        var functionName = function(arg0, arg1, agr2) {

        }

        // sayHi()
        var sayHi = function() {
            log("Hi")
        }
        if(condition) {
            function sayHi() {
                log("Hi")
            }
            } else {
                function sayHi() {
                    log("Yo")
                }
        }

        var sayHi
        if (condition) {
            sayHi = function() {
                log("Hi")
            }
        } else {
            sayHi = function() {
                log("Yo")
            }
        }
}
// demo01()

var demo02 = function() {
        log("*** 递归 ***")

        function factorial(num) {
            if (num <= 1) {
                return 1
            } else {
                return num * factorial(num -1)
            }
        }

        var anotherFactorial = factorial
        factorial = null
        log(anotherFactorial(4))
}
// demo02()

var demo03 = function() {
        log("*** 递归的正确方式 ***")

        function factorial(num) {
            if (num <= 1) {
                return 1
            } else {
                return num * arguments.callee(num -1)
            }
        }

        var anotherFactorial = factorial
        factorial = null
        log(anotherFactorial(4))
}
// demo03()

var demo04 = function() {
        log("*** 保证递归的正确 ***")

        var factorial = (function f(num) {
            if (num <= 1) {
                return 1
            } else {
                return num * f(num -1)
            }
        })
}
// demo04()

var demo05 = function() {
        log("*** 闭包 ***")

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
demo05()
