const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  
  var n=[];
    n=data.split(" ");
    var N=n[0];
    var M=n[1];
    var a;
    var b;
    a=parseInt(N)*parseInt(M);
    b=Math.pow(parseInt(N),2);
    if(parseInt(a)==parseInt(b))
    {
      console.log("yes");
    }
    else
    {
        console.log("no");
    }
});
