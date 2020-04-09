const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    if(data%13==0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
});
