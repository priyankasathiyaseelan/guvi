const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=data.split(' ');
    console.log(n[1],n[0]);
})
