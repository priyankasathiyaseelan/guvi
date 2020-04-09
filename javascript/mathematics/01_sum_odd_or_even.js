const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=data.split(' ');
    var n1,n2;
    n1=n[0];
    n2=n[1];
    var sum=parseInt(n1)+parseInt(n2);
    if(sum%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
});
