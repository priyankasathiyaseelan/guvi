const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  rad = 2*3.14159*data;
  console.log(rad.toFixed(2));
});
