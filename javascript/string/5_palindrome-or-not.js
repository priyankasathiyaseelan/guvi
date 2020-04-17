const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
var t;
var s='';
var k;
inp.on("close",()=>{
  t=n[0];
  k=t.split("");
  for(var i=k.length-1;i>=0;i--)
  {
    s+=k[i];
  } 
  if(s==t)
    console.log("yes");
  else
    console.log("no");
});
