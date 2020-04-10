const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=n[1].split(" ")
    var b=parseInt(n[0])
    var c=0;
    var d=0;
    for(i=0;i<3;i++){
        c+=parseInt(a[i]);
    }
    for(i=b-1;i>=b-4;i--){
        d+=parseInt(a[i])
    }
    if(c===d){
        console.log("1");
    }
    else{
        console.log("0");
    }
});
