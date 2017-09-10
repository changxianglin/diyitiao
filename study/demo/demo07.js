var log = function() {
    return console.log.apply(console, arguments)
}

var demo00 = function() {
        log("*** 操作 DOM ***")

        var script = document.createElement("script")
        script.type = "text/script"
        script.src = "client.js"
        document.getElementById("myList").appendChild(script)

}
// demo00()


    // function loadScript(url) {
    //     var script = document.createElement("script")
    //     script.type = "text/script"
    //     script.src = url
    //     document.body.appendChild(script)
    //
    // }
    // loadScript("client.js")
