const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=n[0].split(" ");
  var b=parseInt(a[0])-parseInt(a[1])
  if(b%2===0){
    console.log("even")
      
  }
  else{
    console.log("odd")
      
  }
});
