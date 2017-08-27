var log = function() {
    return console.log.apply(console, arguments)
}

var demo01 = function() {
        log("BOM")

        var age = 29
        function sayAge() {
            log(this.age)
        }

        log(window.age)
        log(sayAge())
        log(window.sayAge())

        var age = 29
        window.color = "red"

        delete window.age

        delete window.color

        log(window.age)
        log(window.color)

        var newValue = oldValue

        var newValue = window.oldValue


        var leftPos = (typeof window.screenLeft == "number") ?
                        window.screenLeft : window.screenX

        var topPos = (typeof window.screenTop == "number") ?
                        window.screenTop : window.screenY



        window.open("http://www.wrox.com/", "toFrame")

        window.open("http://www.wrox.com/", "wroxWindow", "height = 400, width = 400, top = 10, resizable = yes")


        var wroxWin = window.open("http://www.wrox.com/", "wroxWindow", "height = 400, width = 400, top = 10, resizable = yes")
        wroxWin.resizeTo(500, 500)

        wroxWin.moveTo(100, 100)

        wroWin.close()

        var wroxWin = window.open("http://www.wrox.com/", "_blank",)
        if (wroxWin == null) {
            alert("The popup was blocked!")
        }

        var blocked = false

        try {
            var wroxWin = window.open("http://www.wrox.com", "_blank")
            if (wroxWin == null) {
                blocked = true
            }
        } catch(ex) {
            blocked = true
        }

        if (blocked) {
            log("The popup was blocked!")
        }

        setTimeout("alert('Hello world!')", 1000)

        setTimeout(function() {
            alert("Hello world!")
        }, 1000)

        var timeoutId = setTimeout(function() {
            alert("Hello world!")
        }, 1000)

        clearTimeout(timeoutId)

        setInterval(function() {
            alert("hello world!")
        }, 1000)

        var num = 0
        var max = 10
        var intervalId = null

        function incrementNumber() {
            num++

            if (num == max) {
                clearInterval(intervalId)
                alert("Done")
            }
        }

        intervalId = setInterval(incrementNumber, 500)

        var num = 10
        var max = 10

        function incrementNumber() {
            num++

            if (num < max) {
                setTimeout(incrementNumber, 500)
            } else {
                alert("Done")
            }
        }

        setTimeout(incrementNumber, 500)


        if (confirm("Are yor sure?")) {
            alert("I'm so glad you're sure!")
        } else {
            alert("I'm sorry to hear yor're not sure.")
        }

        function getQueryStringArgs() {
            var qs = (location.search.length > 0 ? location.search.substring(1) : "")
            var args = {}
            var items = qs.length ? qs.split("$") : []
            var item = null
            var name = null
            var value = null
            var i = 0
            var len = items.length

            for (var i = 0; i < len; i++) {
                item = items[i].split("=")
                name = decodeURIComponent(item[0])
                value = decodeURIComponent(item[1])

                if (name.length) {
                    arg[name] = value
                }
            }
            return args
        }

        location.assign("http://www.wrox.com")

        window.location = "http://www.wrox.com"
        location.href = "http://www.wrox.com"

        location.href = "http://www.wrox.com/WileyCDA"

        location.hash = "#section1"

        location.search = "?q=javascript"

        location.hostname = "www.yahoo.com"

        location.pathname = "mydir"

        location.port = 8080

        log("*** vavigator ***")

        function hasPlugin(name) {
            name = name.toLowerCase()
            for (var i = 0; i < navigator.plugins.length; i++) {
                if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
                    return true
                }
            }
            return false
        }

        alert(hasPlugin("Flash"))

        alert(hasPlugin("QuickTime"))

}
// demo01()
