var fs = require('fs');
var string = fs.readFileSync(process.argv[2]).toString();

var count = 0;

string.split('').forEach((ch) => {
  if (ch === '\n') {
    count += 1;
  }
});

console.log(count);
