const readline=require("readline");
const inp=readline.createInterface({input:process.stdin})
inp.on("line",(data)=>{
   var a=data.split(" ");
   var b=a[0].split("");
   var c=a[1];
   var d=0;
   for(i=0;i<b.length;i++){
       if(parseInt(c)==parseInt(b[i])){
           d=d+1
       }
   }
   if(d>0){
       console.log(d);
   }
   else{
       console.log('-1')
   }
});
