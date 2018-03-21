const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const useJson = bodyParser.json()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api', useJson, function(req, res) {
  console.log(req.body)
  res.send('get api')
})

app.post('/api', useJson, function(req, res) {
  console.log(req.body.name)
  res.send('post api')
})

app.listen(3000, useJson, function() {
  console.log('server running in port 3000')
})
