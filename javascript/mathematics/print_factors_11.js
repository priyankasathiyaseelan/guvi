const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=n[0].split(" ")
    var c=[];
    for(let i=0;i<=a;i++){
    if(a%i===0)
      c.push(i);
  }
        console.log(c.join(" "));
});
