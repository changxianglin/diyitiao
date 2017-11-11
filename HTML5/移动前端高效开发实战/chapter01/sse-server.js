var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    var index = './see.html'
    var fileName
    var interval
    if (req.url === '/') {
        fileName = index
    } else {
        fileName = '.' + req.url
    }
    if (fileName === './stream') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Content-Control': 'no-cache',
            'Connection': 'keep-alive'
        })
        res.write('retry: 10000\n')
        res.write('data', (new Date()) + '\n\n')
        interval = setInterval(function() {
            res.write('data:' + (new Date()) + "\n\n")
        }, 1000)
        req.connection.addEventListener('close', function() {
            clearInterval(interval)
        }, false)
    } else if(fileName === index){
        fs.exists(fileName, function(exists) {
            
        })
    }
})
