"use strict"
var log = function() {
    return console.log.apply(console, arguments)
}
var demo03 = function () {
    log("***面向对象的程序设计***")


// var person = new Object()
// person.name = "Nicholas"
// person.age = 29
// person.job =  "Software Engineer"
//
// person.sayName = function() {
//     log(this.name)
// }
//
// var person = {
//     name: "Nicholas",
//     age: 29,
//     job: "Softwar Engineer",
//
//     sayName: function() {
//         log(this.name)
//     }
// }

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
demo03()
