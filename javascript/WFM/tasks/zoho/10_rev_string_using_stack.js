const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ");
  var b;
  b=a.reverse();
  console.log(b.join(" "));
});

//input:
//i am jsb
//output;
//jsb am i
