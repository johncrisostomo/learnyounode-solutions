var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, (err, list) => {
  list.forEach((file) => {
    if (file.split('.')[1] === extension) {
      console.log(file);
    }
  });
});
