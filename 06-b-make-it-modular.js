var list = require('./06-a-make-it-modular');

list(process.argv[2], process.argv[3], (err, data) => {
   if (err) return err;
   data.forEach(file => console.log(file));
});