var nums = process.argv.slice(2, process.argv.length)

var total = nums.reduce((total, number) => { return total + Number(number)}, 0);

console.log(total);
