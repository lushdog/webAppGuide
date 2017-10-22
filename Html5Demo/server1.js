var http = require('http')
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Method', 'GET,POST')
  res.end(JSON.stringify({data: 'HELLO WORLD!'}))
}).listen(4412, function () {
  console.log('listening on http:localhost:4412');
})