const http = require('http')

const server = http.createServer(function (req, res) {
    res.end('first page apple can response.')
})

server.listen(8080, function() {
    console.log('listen port 8080')
})