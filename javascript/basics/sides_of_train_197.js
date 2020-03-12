const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var n=data.split(' ');
  var a=parseInt(n[0]);
  var b=parseInt(n[1]);
  var c=parseInt(n[2]);
  if(((a+b)<=c) || ((a+c)<=b) || ((b+c)<=a))
  {
    console.log("no");
  }
  else{
    console.log("yes");
  }
});
