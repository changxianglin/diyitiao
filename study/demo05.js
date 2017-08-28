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

        
}
demo00()
