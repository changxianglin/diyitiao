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
}
// demo05()

var demo0 = function() {
        log("*** 举例 ***")

        function compare(value1, value2) {
            if (value1 < value2) {
                return -1
            } else if (value1 > value2) {
                return 1
            } else {
                return 0
            }
        }

        var result = compare(5, 10)
        log(result)
}
// demo0()
var demo07 = function() {
        log("*** ___闭包与变量___ ***")

        function createFunction() {
            var result = new Array()

            for(var i = 0; i < 10; i++) {
                result[i] = function() {
                    return i
                }
            }
            return result
        }

        log(createFunction())
}
// demo07()

var demo08 = function() {
        log("*** ___闭包与变量___ ***")

        function createFunctions() {
            var result = new Array()

            for (var i = 0; i < 10; i++) {
                result[i] = function(num) {
                    return function() {
                        return num
                    }
                }(i)
            }
            return result
        }

        createFunctions()
}
// demo08()

var demo09 = function() {
        log("*** 关于闭包中的 this ***")

        var name = "The Window"

        var object = {
            name: "My Object",
            getNameFunc: function() {
                return function() {
                    return this.nam
                }
            }
        }

        log(object.getNameFunc()())
}
// demo09()

var demo10 = function() {
    var name = "The Window"

    var object = {
        name: "My object",

        getNameFunc: function() {
            var that = this
            return function() {
                return that.name
            }
        }

    }

    log(object.getNameFunc()())
}
// demo10()

var demo11 = function() {
        log(",,,")

        var name = "The Window"

        var object = {
            name: "My object",
            getName: function() {
                return this.name
            }
        }

        log(object.getName())
        log((object.getName)())
        log((object.getName = object.getName)())
}
// demo11()


var demo12 = function() {
        log("****")

        function assignHandler() {
            var element = document.getElementById("someElement")
            element.onclick = function() {
                log(element.id)
            }
        }
}

var demo13 = function() {
        log("8")

        function assignHandler() {
            var element = document.getElementById("someElement")
            var id = element.id
            element.onclick = function() {
                log(id)
            }
            element = null
        }
}

var demo14 = function() {
        log("*** 模仿块级作用域 ***")

        function oupputNumbers(count) {
            log("0", i)
            for (var i = 0; i < count; i++) {
                log("1", i)
            }
            log("2", i)
        }
        oupputNumbers(10)
}

// demo14()

var demo15 = function() {
    function outputNumbers(count) {
        for(var i = 0; i < count; i++){
            log("1", i)
        }

        var i
        log("2", i)
    }
    outputNumbers(10)
}
// demo15()

var demo16 = function() {
    log("****")

    var someFunction = function() {

    }

    someFunction()

    function outputNumbers(counts) {
        (function() {
            for (var i = 0; i < counts; i++) {
                log("1", i)
            }
        })()
        log("2", i)
    }

    outputNumbers(10)
}
// demo16()

var dmeo17 = function() {
        log("****")
        (function() {
            var now = new Date()
            if (now.getMonth() == 0 && now.getDate() == 1) {
                log("Happy new year!")
            }
        })()
}
// demo17()

var demo18 = function() {
    
}
