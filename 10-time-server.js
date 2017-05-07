var net = require('net');

var server = net.createServer(function (socket) {
    var date = new Date();
    
    var month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
    var hours = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours();
    var mins = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes();
    
    var returnString = date.getFullYear() + '-' + month + '-' + 
        day + ' ' + hours + ':' + mins + '\n';
    socket.write(returnString);
    
    socket.end();
});

server.listen(process.argv[2]);