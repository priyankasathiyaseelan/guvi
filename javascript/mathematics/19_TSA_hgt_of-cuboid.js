const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=n[0].split(" "),n1,n2;
    var l=parseInt(a[0]),b=parseInt(a[1]),h=parseInt(a[2]);
    n1= 2*((l* b)+(l*h)+(b*h));
    n2=l*b*h;
    console.log(n1,n2);
});
