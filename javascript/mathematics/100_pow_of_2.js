const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
   var a=parseInt(n[0]),b=1,c=2;
   while(c===1){
       c=Math.pow(c,2);
       if(c>=a){
           b=0;
           break;
        }
  }
  if(c===a){
      console.log("no");
  }
  else{
      console.log("yes");
  }
});
