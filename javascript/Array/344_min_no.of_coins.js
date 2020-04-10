const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(" ");
  var b=parseInt(a[0]);
  for(var i=1;i<a.length;i++){
    if(b>parseInt(a[i])){
      b=a[i];
    }
  }
  console.log(b);
});
