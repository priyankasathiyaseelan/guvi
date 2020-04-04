const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var G=data.split(" ");
    if(((G[0]=="R" )&& (G[1]=="P") || ((G[0]=="S") && (G[1]=="R")) || ((G[0]=="P") && (G[1]=="S"))))
    {
    console.log(G[1]);
    }
    else if(((G[0]=="R" )&& (G[1]=="S") || ((G[0]=="P") && (G[1]=="R")) || ((G[0]=="S") && (G[1]=="P"))))
    {
    console.log(G[0]);
    }
    if(G[0]==G[1])
    {
    console.log("D");
    }
    
});
