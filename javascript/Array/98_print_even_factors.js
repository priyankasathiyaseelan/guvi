const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=parseInt(n[0])
    var b=[];
    for(let i=0;i<=a;i+=2){
        if(a%i===0){
            b.push(i);
        }
        
    }
    if(b.length>0){
        console.log(b.join(" "));
    }
    else{
        console.log("-1");
    }
});
