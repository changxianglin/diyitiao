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

        // document.domain = "wrox.com"

        // document.domain = "nczonline.net"

        var div = document.getElementById("myDiv")

        var images = document.getElementsByTagName("img")
        var myImage = images.namedItem("myImage")
        var myIamge = images["myImage"]

        var allElements = document.getElementsByTagName("*")

        var radio = document.getElementsByName("color")

        var hasXmlDom = document.implementation.hasFeature("XML", "1.0")

        var element = document.createElement("div")
        element.className = "message"

        var textNode = document.createTextNode("Hello world")
        element.appendChild(textNode)

        var anotherTextNode = document.createTextNode("Yippee")
        element.appendChild(anotherTextNode)

        document.body.appendChild(element)

        alert(element.childNodes.length)

        element.normalize()
        alert(element.childNodes.length)
        alert(element.firstChild.nodeValue)


}
// demo00()

var demo01 = function() {
        log("分割线")

        var element = document.createElement("div")
        element.className = "message"

        var textNode = document.createTextNode("Hello world!")
        element.appendChild(textNode)

        document.body.appendChild(element)

        var newNode = element.firstChild.splitText(5)
        alert(element.firstChild.nodeValue)
        alert(newNode.nodeValue)
        alert(element.childNodes.length)
}
// demo01()

var dmeo02 = function() {
        log("Comment 类型")

        var div = document.getElementById("myDiv")
        var comment = div.firstChild
        alert(comment.data)
}
// dmeo02()

var demo03 = function() {
        log(document.doctype.name)
}
// demo03()

var demo04 = function() {

        var fragment = document.createDocumentFragment()
        var ul = document.getElementById("myList")
        var li = null

        for (var i = 0; i < 3; i++) {
            li = document.createElement("li")
            li.appendChild(document.createTextNode("Item" + (i + 1)))
            fragment.appendChild(li)
        }

        ul.appendChild(fragment)
}
// demo04()

var demo05 = function() {
    var attr = document.createAttribute("align")
    attr.value = "left"
    element.setAttributeNode(attr)
    alert(element.attributes["align"].value)
    alert(element.getAttributeNode("align").value)
    alert(element.getAttribute("align"))
}
// demo05()
