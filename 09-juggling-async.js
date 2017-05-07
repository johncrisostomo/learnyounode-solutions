var bl = require('bl');
var http = require('http');

var links = [process.argv[2], process.argv[3], process.argv[4]];
var contents = {};
var counts = links.length;

function isDone() {
    if (counts === 0) {
        links.forEach(function(link) {
           console.log(contents[link]); 
        });
    } 
}

links.forEach(function (link) {
   http.get(link, function (response) {
       response.pipe(bl(function (err, data) {
           if (err) return err;
           counts -= 1;
           contents[link] = data.toString();
           isDone();
       }));
   });
});
