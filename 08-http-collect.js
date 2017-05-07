var bl = require('bl');
var http = require('http');

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
       if (err) return err;
       
       console.log(data.length);
       console.log(data.toString());
    }));
});