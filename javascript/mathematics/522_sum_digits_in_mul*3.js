const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    sum=0;
    for(i=0;i<data.length;i++){
        sum=sum+parseInt(data[i]);
    }
    if(sum%3==0){
        console.log("yes")
    }
    else{
        console.log("not")
    }
    
});
