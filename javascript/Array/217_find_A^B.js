const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var n=[];
  n=data.split(' ');
  var a=n[0];
  var b=n[1];
  var c;
  c=Math.pow(parseInt(a),parseInt(b));
  console.log(c);
});
