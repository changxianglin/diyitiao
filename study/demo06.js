var log = function() {
    return console.log.apply(console, arguments)
}

var demo00 = function() {
        log("*** DOM ***")

        // if (someNode.nodeType == Node.ELEMENT_NODE()) {
        //     log("Node is an element")
        // }

        // if (someNode.nodeType == 1) {
        //     log("Node is an element")
        // }

        // returnedNode = someNode.insertBefore(newNode, null)
        //
        // log(newNode == someNode.lastChild)
        //
        // var return

        var originalTile = document.title

        document.title = "New page title"

        var url = document.URL

        var domain = document.domain

        var referrer = document.referre

        document.domain = "wrox.com"

        document.domain = "nczonline.net"

        var div = document.getElementById("myDiv")

        var images = document.getElementsByTagName("img")
        var myImage = images.namedItem("myImage")
        var myIamge = images["myImage"]

        var allElements = document.getElementsByTagName("*")

        var radio = document.getElementsByName("color")

        var hasXmlDom = document.implementation.hasFeature("XML", "1.0")
}
// demo00()
