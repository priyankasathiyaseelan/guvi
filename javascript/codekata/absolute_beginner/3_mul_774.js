const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var a=[];
  for(i=1;i<=3;i++){
    a.push(data*i)}
    console.log(a.join(' '));
  });
