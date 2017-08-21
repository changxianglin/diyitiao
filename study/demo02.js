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

}
demo03()
