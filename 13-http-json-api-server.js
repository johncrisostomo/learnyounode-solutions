var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var requestURL = url.parse(req.url, true);
    var date = new Date(requestURL.query.iso);
    var dateObject = {};
    
    if (requestURL.pathname === '/api/parsetime') {
        dateObject.hour = date.getHours();
        dateObject.minute = date.getMinutes();
        dateObject.second = date.getSeconds();
        
        res.end(JSON.stringify(dateObject));
    }
    
    if (requestURL.pathname === '/api/unixtime') {
        dateObject.unixtime = date.getTime();
        
        res.end(JSON.stringify(dateObject));
    }
});

server.listen(process.argv[2]);