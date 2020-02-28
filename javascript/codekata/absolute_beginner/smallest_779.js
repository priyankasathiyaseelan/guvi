const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[]
  a=n[0].split(" ")
  var n1=a[0],n2=a[1]
  if(n1<n2)
    console.log(n1);
  else
    console.log(n2);
  });
