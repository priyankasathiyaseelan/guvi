const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[0];
    var b = a;
    var hex = parseInt(b,2).toString(16);
    console.log(hex);
});
