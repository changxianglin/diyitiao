var http = require('http')

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')

    req.setEncoding('utf8')

    res.end(JSON.stringify({data: 'Hello World!'}))
}).listen(4412, function() {
    console.log('listening on http://localhost:4412')
})
