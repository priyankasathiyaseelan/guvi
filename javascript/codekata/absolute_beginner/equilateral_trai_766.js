const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(n)=>{
  E=(Math.sqrt(3)/4*(n*n));
  console.log(E.toFixed(2));
});
