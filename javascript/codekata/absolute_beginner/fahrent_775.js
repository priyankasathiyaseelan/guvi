const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var n=(parseInt(data)*1.8)+32
  console.log(n.toFixed(2));
});
