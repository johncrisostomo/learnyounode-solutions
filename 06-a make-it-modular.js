var fs = require('fs');

module.exports = function(dirName, extension, cb) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return cb(err);
    }
    
    var filtered = [];
    
    for (var i = 0; i < list.length; i += 1) {
        var file = list[i];
        if (file.split('.')[1] === extension) {
            filtered.push(file);
        }
    }
    
    return cb(null, filtered);
  });
}