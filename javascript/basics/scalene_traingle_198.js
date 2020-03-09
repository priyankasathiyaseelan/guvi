const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=data.split(' ');
    var a=n[0];
    var b=n[1];
    var c=n[2];
    if((a!=b) && (a!=c) && (b!=c)){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
