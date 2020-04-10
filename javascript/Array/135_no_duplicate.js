const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[1].split(" ");
   var b=n[0];
   var c=[];
   for(i=0;i<parseInt(b);i++){
       c.push(a[i])
   }
   let unique=[...new Set(c)];
   console.log(unique.join(" "));
});
