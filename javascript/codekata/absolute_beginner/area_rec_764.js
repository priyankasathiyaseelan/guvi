const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",(data)=>{
  var l=n[0];
  var b=n[1];
  var x=parseInt(l)*parseInt(b)
  console.log(x);
});
