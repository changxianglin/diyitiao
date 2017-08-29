var log = function() {
    return console.log.apply(console, arguments)
}
var demo00 = function() {
        log("*** 客户端检测 ***")

        function getElement(id) {
            if (document.getElementById) {
                return document.getElementById(id)
            } else if (document.all) {
                return document.all[id]
            } else {
                throw new Error("No way to retrieve element")
            }
        }

        function isSortable(object) {
            return typeof object.sort == "function"
        }

        function hasCreateElement() {
            return typeof document.createElement == "function"
        }

        // var xhr = new ActiveXObject("Microsoft.XMLHttp")
        // if (xhr.open) {
        //
        // }
        //
        // function isHostMethod(object, property) {
        //     var t = typeof object[property]
        //     return t == 'function' || (!!(t == 'object' && object[property]))||
        //             t == 'unknown'
        // }
        //
        // result = isHostMethod(xhr, "open")
        // result = isHostMethod(xhr, "foo")

        var hasDontEnumQuirk = function() {
            var o = { toString: function() {}}
            for (var prop in o) {
                if (prop == "toString") {
                    return false
                }
            }
            return true
        }()

        var hasEnumShadowsQuirk = function() {

            var o = {toString: function() {}}
            var count = 0
            for (var prop in o) {
                if (prop == "toString") {
                    count++
                }
            }
            return (count > 1)
        }()

        navigator.userAgent

        var client = function() {
            log("000")
            var engine = {
                ie: 0,
                gecko: 0,
                webkit: 0,
                khtml: 0,
                opera: 0,
                ver: null,
            }

            var browser = {
                ie: 0,
                firefox: 0,
                safari: 0,
                konq: 0,
                opera: 0,
                chrome: 0,
                ver: null,
            }

            var system = {
                win: false,
                mac: false,
                xll: false,
            }



            return {
                engine: engine,
                browser: browser,
                system: system,

                iphone: false,
                ipod: false,
                ipad: false,
                android: false,
                nokiaN: false,
                winMobile: false,
                wii: false,
                ps: false,
            }
        }()

        log("133", client.engine.webkit)
        log("233", client.browser.ie)

        if (client.engine.ie) {
            log("111")
        } else if (client.engine.gecko > 1.5) {
            if (client.engine.ver == "1.8.1") {
                log("222")
            }
        }

        if (window.opera) {
            engine.ver = "window.opera.version"
            engine.opera = parseFloat(engine.ver)
        }
}
demo00()
