var http = require('http');

var server = http.createServer(function (req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  
  req.on('end', function() {
    res.end(body.toString().toUpperCase());
  });
});

server.listen(process.argv[2]);