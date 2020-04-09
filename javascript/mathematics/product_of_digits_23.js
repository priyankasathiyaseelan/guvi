const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=n[0].split("");
  var b=1;
  for(var i=0;i<a.length;i++)
   b*=parseInt(a[i]);
   console.log(b);
});
