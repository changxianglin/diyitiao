"use strict"
var log = function() {
    return console.log.apply(console, arguments)
}
var demo03 = function() {

            log("***面向对象的程序设计***")


        var person = new Object()
        person.name = "Nicholas"
        person.age = 29
        person.job =  "Software Engineer"

        person.sayName = function() {
            log(this.name)
        }

        var person = {
            name: "Nicholas",
            age: 29,
            job: "Softwar Engineer",

            sayName: function() {
                log(this.name)
            }
        }

        var person = {}
        Object.defineProperty(person, "name", {
            writable: false,
            value: "Nicholas"
        })

        log(person.name)
        // person.name = "Greg"
        log(person.name)

        var person = {}
        Object.defineProperty(person, "name", {
            configurable: false,
            value: "Nicholas"
        })
        log(person.name)
        // delete person.name
        log(person.name)

        var book = {
            __year: 2004,
            edition: 1
        }
        Object.defineProperty(book, "year", {
            get: function() {
                return this.__year
            },
            set: function(newValue) {
                if (newValue > 2004) {
                    this.__year = newValue
                    this.edition += newValue - 2004
                }
            }
        })
        book.year = 2005;
        log(book.edition)

        // 创建对象

        // 工厂模式
        function createPerson(name, age, job) {
            var o = new Object()
            o.name = name
            o.age = age
            o.sayName = function() {
                log(this.name)
            }
            return o
        }

        var person1 = createPerson("Nicholas", 29, "Software Engineer")
        var person2 = createPerson("Greg", 27, "Doctor")
        log(person1.name)
        log(person2.name)

        // 构造函数模式
        function Person(name, age, job) {
            this.name = name
            this.age = age
            this.job = job
            this.sayName = function() {
                log(this.name)
            }
        }

        var person1 = new Person("Nicholas", 29, "Software Engineer")
        var person2 = new Person("Greg", 27, "Doctor")

        log(person1.name)
        log(person2.name)

        log(person1.constructor == Person)
        log(person2.constructor == Person)

        log(person1 instanceof Object)
        log(person1 instanceof Person)
        log(person2 instanceof Object)
        log(person2 instanceof Person)


        // 构造函数当作函数
        var person = new Person("Nicholas", 29, "Software Engineer")
        person.sayName()

        Person("Greg", 27, "Doctor")
        // window.sayName()

        var o = new Object()
        Person.call(o, "Kristen", 25, "Nurse")
        // o.sayName()

        // 构造函数的问题
        // function Person(name, age, job) {
        //     this.name = name
        //     this.age = age
        //     this.job = job
        //     this.sayName = new Function("log(this.name)")
        // }
        // log(person1.sayName == perons2.sayName)
        function Person0(name, age, job) {
            this.name = name
            this.age = age
            this.job = job
            this.sayName = sayName
        }

        function sayName() {
            log(this.name)
        }

        var person1 = new Person0("Nichoals", 29, "Software Engineer")
        var person2 = new Person0("Greg", 27, "Doctor")

}
// demo03()
var demo04 = function() {
        log("***原型模式***")

        function Person() {}
        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var person1 = new Person()
        person1.sayName()

        var person2 = new Person()
        person2.sayName()

        log(person1.name == person2.name)

        // 理解原型对象
        log(Person.prototype.isPrototypeOf(person1))
        log(Person.prototype.isPrototypeOf(person2))

        log(Object.getPrototypeOf(person1) == Person.prototype)
        log(Object.getPrototypeOf(person1).name)

        function Person() {}

        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var person1 = new Person()
        var person2 = new Person()

        person1.name = "Greg"
        log("prototype", person1.name)
        log(person2.name)

        function Person() {}

        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var person1 = new Person()
        var person2 = new Person()

        person1.name = "Greg"
        log("111", person1.name)
        log(person2.name)

        delete person1.name
        log(person1.name)

}
// demo04()

var demo05 = function() {
    log("***检测对象及原型对象***")

    function Person() {

    }

    Person.prototype.name = "Nicholas"
    Person.prototype.age = 29
    Person.prototype.job = "Software Engineer"
    Person.prototype.sayName = function() {
        log(this.name)
    }

    var person1 = new Person()
    var person2 = new Person()

    log(person1.hasOwnProperty("name"))

    person1.name = "Greg"
    log(person1.name)
    log(person1.hasOwnProperty("name"))

    log(person2.name)
    log(person2.hasOwnProperty("name"))

    delete person1.name
    log("delete", person1.name)
    log(person1.hasOwnProperty("name"))


}
// demo05()

var demo06 = function() {
        log("*** in & for in & hasOwnProperty***")

        function Person() {

        }

        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var person1 = new Person()
        var person2 = new Person()

        log(person1.hasOwnProperty("name"))
        log("name" in person1)

        person1.name = "Greg"
        log("in", person1.name)
        log(person1.hasOwnProperty("name"))
        log("name" in person1)

        log(person2.name)
        log("hasOwnProperty", person2.hasOwnProperty("name"))
        log("name" in person2)

        delete person1.name
        log(person1.name)
        log(person1.hasOwnProperty("name"))
        log("name" in person1)


        function hasPrototypeProperty(object, name) {
            return !object.hasOwnProperty(name) && (name in object)
        }
}
// demo06()

var demo07 = function() {
        log("in && hasOwnproPerty")


        // 检测只是原型的对象
        function hasPrototypeProperty(object, name) {
            return !object.hasOwnProperty(name) && (name in object)
        }


        function Person() {

        }

        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var person = new Person()
        log(hasPrototypeProperty(person, "name"))

        person.name = "Greg"
        log(hasPrototypeProperty(person, "name"))


        var o = {
            toString: function() {
                return "My Object"
            }
        }

        for(var prop in o) {
            log(prop)
            if (prop == "toString") {
                log("Found to String")
            }
        }

}
// demo07()


var demo08 = function() {
        log("*** Object.keys()***")


        function Person() {

        }

        Person.prototype.name = "Nicholas"
        Person.prototype.age = 29
        Person.prototype.job = "Software Engineer"
        Person.prototype.sayName = function() {
            log(this.name)
        }

        var keys = Object.keys(Person.prototype)
        log(keys)

        var p1 = new Person()
        p1.name = "Rob"
        p1.age = 31
        var p1keys = Object.keys(p1)
        log(p1keys)

        var keys = Object.getOwnPropertyNames(Person.prototype)
        log(keys)
}
// demo08()


var demo09 = function() {
        log("*** easy prototype ***")

        function Person() {

        }

        Person.prototype = {
            name: "Nicholas",
            age: 29,
            job: "Software Engineer",
            sayName: function() {
                log(this.name)
            },
        }

        var friend = new Person()

        log(friend instanceof Object)
        log(friend instanceof Person)
        log(friend.constructor == Person)
        log(friend.constructor == Object)
}
// demo09()


var demo10 = function() {
    log("*** constructor ***")

    function Person() {

    }

    Person.prototype = {
        constructor: Person,
        name: "Nicholas",
        age: 29,
        job: "Software Engineer",
        sayName: function() {
            log(this.name)
        },
    }

    var friend = new Person()

    log(friend instanceof Object)
    log(friend instanceof Person)
    log(friend.constructor == Person)
    log(friend.constructor == Object)

    var friend = new Person()

    Person.prototype.sayHi = function() {
        log('hi')
    }

    friend.sayHi()

}
// demo10()

var demo11 = function() {
        log("*** 原型的动态性 ***")
        function Person() {

        }

        Person.prototype.sayHi = function() {
            log('hi')
        }

}
// demo11()

var demo12 = function() {
        log("*** 原生对象的原型 ***")

        log(typeof Array.prototype.sort)
        log(typeof String.prototype.substring)

        String.prototype.startsWith = function(text) {
            return this.indexOf(text) == 0
        }

        var msg = "Hello world!"
        log(msg.startsWith("Hello"))

        log("*** 原型对象的问题 ***")

        function Person() {

        }

        Person.prototype = {
            constructor: Person,
            name: "Nicholas",
            age: 29,
            job: "Software Engineer",
            friends: ["Shelby", "Court"],
            sayName: function() {
                log(this.name)
            }
        }

        var person1 = new Person()
        var person2 = new Person()

        person1.friends.push("Van")

        log(person1.friends)
        log(person1.friends)
        log(person1.friends === person2.friends)


}
// demo12()

var demo13 = function() {
        log("*** 组合使用构造函数模式和原型模式 ***")


        function Person(name, age, job) {
            this.name = name
            this.age = age
            this.job = job
            this.friends = ["Shelby", "Court"]
        }

        Person.prototype = {
            constructor: Person,
            sayName: function() {
                log(this.name)
            }
        }

        var person1 = new Person("Nicholas", 29, "Software Engineer")
        var person2 = new Person("Greg", 27, "Doctor")

        person1.friends.push("Van")
        log(person1.friends)
        log(person2.friends)
        log(person1.friends === person2.friends)
        log(person1.sayName === person2.sayName )


}

// demo13()

var demo14 = function() {
        log("*** 动态原型 ***")

        function Person(name, age, job) {
            this.name = name
            this.age = age
            this.job = job

            // 方法
            if(typeof this.sayName != "function") {

                Person.prototype.sayName = function() {
                    log(this.name)
                }
            }
        }

        var friend = new Person("Nicholas", 29, "Software Engineer")
        friend.sayName()
}
// demo14()

var demo15 = function() {
        log("*** 寄生构造函数模式 ***")

        function Person(name, age, job) {
            var o = new Object()
            o.name = name
            o.age = age
            o.job = job
            o.sayName = function() {
                // log("yes")
                log(this.name)
            }
            return o
        }

        var friend = new Person("Nicholas", 29, "Software Engineer")
        friend.sayName()

        function SpecialArray() {

            var values = new Array()

            values.push.apply(values, arguments)

            values.toPipedString = function() {
                return this.join("|")
            }
            return values
        }

        var colors = new SpecialArray("red", "blue", "green")
        log(colors.toPipedString())
}
// demo15()

var demo16 = function() {
        log("*** 稳妥构造函数模式 ***")


        function Person(name, age, job) {
            var o = new Object()
            o.sayName = function() {
                log(name)
            }
            return o
        }

        var friend = Person("Nicholas", 29, "Software Engineer")
        friend.sayName()
}
// demo16()

var demo17 = function() {
        log("*** 继承 ***")


        function SuperType() {
            this.property = true
        }

        SuperType.prototype.getSuperValue = function() {
            return this.property
        }

        function SubType() {
            this.subProperty = false
        }

        SubType.prototype = new SuperType()

        SubType.prototype.getSubValue = function() {
            return this.subProperty
        }

        var instance = new SubType
        log(instance.getSuperValue())

        log(instance instanceof Object)
        log(instance instanceof SuperType)
        log(instance instanceof SubType)

        log(Object.prototype.isPrototypeOf(instance))
        log(SuperType.prototype.isPrototypeOf(instance))
        log(SubType.prototype.isPrototypeOf(instance))
 }
// demo17()

var demo18 = function() {
        log("*** 忘记默认的原型链 ***")

        function SuperType() {
            this.property = true
        }

        SuperType.prototype.getSuperValue = function() {
            return this.property
        }

        function SubType() {
            this.subProperty = false
        }

        SubType.prototype = new SuperType()

        // SubType.prototype.getSubValue = function() {
        //     return this.subProperty
        // }


        SubType.prototype.getSubValue = function() {
            return this.subproperty
        }


        SubType.prototype.getSuperValue = function() {
            return false
        }

        var instance = new SubType
        log(instance.getSuperValue())

}
// demo18()

var demo19 = function() {
    log("原型链的问题")

    function SuperType() {
        this.colors = ["red", "blue", "green"]
    }

    // SuperType.prototype.getSuperValue = function() {
    //     return this.property
    // }

    function SubType() {

    }

    SubType.prototype = new SuperType()

    // SubType.prototype.getSubValue = function() {
    //     return this.subProperty
    // }


    // SubType.prototype.getSubValue = function() {
    //     return this.subproperty
    // }


    // SubType.prototype.getSuperValue = function() {
    //     return false
    // }

    var instance = new SubType()
    instance.colors.push("black")
    log(instance.colors)

    var instance2 = new SubType()
    log(instance2.colors)
}
// demo19()

var demo20 = function() {
        log("*** 借用组合式继承 ***")


        function SuperType() {
            this.colors = ["red", "blue", "green"]
        }



        function SubType() {
            SuperType.call(this)
        }


        var instance = new SubType()
        instance.colors.push("black")
        log(instance.colors)

        var instance2 = new SubType()
        log(instance2.colors)


}
// demo20()
var demo21 = function() {
        log("*** 传递参数 ***")


        function SuperType(name) {
            this.name = name
        }

        function SubType() {
            SuperType.call(this, "Nicholas")
            this.age = 29
        }

        var instance = new SubType()
        log(instance.name)
        log(instance.age)
}
// demo21()

var demo22 = function() {
        log("*** 组合继承 ***")

        function SuperType(name) {
            this.name = name
            this.colors = ["red", "blue", "green"]
        }

        SuperType.prototype.sayName = function() {
            log(this.name)
        }

        function SubType(name, age) {
            SuperType.call(this, name)
            this.age = age
        }

        SubType.prototype = new SuperType()
        SubType.prototype.constructor = SubType
        SubType.prototype.sayAge = function() {
            log(this.age)
        }

        var instance1 = new SubType("Nicholas", 29)
        instance1.colors.push("black")
        log(instance1.colors)
        instance1.sayName()
        instance1.sayAge()

        var instance2 = new SubType("Greg", 27)
        log(instance2.colors)
        instance2.sayName()
        instance2.sayAge()

}
// demo22()

var demo23 = function() {
        log("*** 原型式继承 ***")

        function object(o) {
            function F() {}
            F.prototype = o
            return new F()
        }

        var person = {
            name: "Nicholas",
            friends: ["Shely", "Court", "Van"]
        }

        var anotherPerson = Object(person)
        anotherPerson.name = "Greg"
        anotherPerson.friends.push("Rob")

        var yetAnotherPerson = Object(person)
        yetAnotherPerson.name = "Linda"
        yetAnotherPerson.friends.push("Barbie")

        log(person.friends)
}
// demo23()

var demo24 = function() {
        log("***")

        function object(o) {
            function F() {}
            F.prototype = o
            return new F()
        }

        var person = {
            name: "Nicholas",
            friends: ["Shely", "Court", "Van"]
        }

        var anotherPerson = Object.create(person)
        anotherPerson.name = "Greg"
        anotherPerson.friends.push("Rob")

        var yetAnotherPerson = Object.create(person)
        yetAnotherPerson.name = "Linda"
        yetAnotherPerson.friends.push("Barbie")

        log(person.friends)

}
// demo24()

var demo25 = function() {
        log("*** 寄生式继承 ***")

        function createAnother(original) {
            var clone = Object(original)
            clone.sayHi = function() {
                log("hi")
            }
            return clone
        }

        var person = {
            name: "Nicholas",
            friends: ["Shely", "Court", "Van"],
        }

        var anotherPerson = createAnother(person)
        anotherPerson.sayHi()
}
// demo25()

var demo26 = function() {
    function SuperType() {
        this.colors = ["red", "blue", "green"]
    }



    function SubType() {
        SuperType.call(this)
    }


    var instance = new SubType()
    instance.colors.push("black")
    log(instance.colors)

    var instance2 = new SubType()
    log(instance2.colors)


}
// demo20()
var demo21 = function() {
    log("*** 传递参数 ***")


    function SuperType(name) {
        this.name = name
    }

    function SubType() {
        SuperType.call(this, "Nicholas")
        this.age = 29
    }

    var instance = new SubType()
    log(instance.name)
    log(instance.age)
}
// demo21()

var demo22 = function() {
    log("*** 组合继承 ***")

    function SuperType(name) {
        this.name = name
        this.colors = ["red", "blue", "green"]
    }

    SuperType.prototype.sayName = function() {
        log(this.name)
    }

    function SubType(name, age) {
        SuperType.call(this, name)
        this.age = age
    }

    function inheritPrototype(subType, superType) {
        var prototype = Object(superType.prototype)
        prototype.constructor = subType
        subType.prototype = prototype
    }

    inheritPrototype(SubType, SuperType)

    var instance1 = new SubType("Nicholas", 29)
    instance1.colors.push("black")
    log(instance1.colors)
    instance1.sayName()
    instance1.sayAge()

    var instance2 = new SubType("Greg", 27)
    log(instance2.colors)
    instance2.sayName()
    instance2.sayAge()
}
// demo26()
