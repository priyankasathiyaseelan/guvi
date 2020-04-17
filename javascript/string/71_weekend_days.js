const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",data=>{
    if(data=="monday" || data=="tuesday" || data=="wednesday" || data=="thursday" || data=="friday"){
        console.log("no");
    }
    if(data=="saturday" || data=="sunday"){
        console.log("yes");
    }
    
});
