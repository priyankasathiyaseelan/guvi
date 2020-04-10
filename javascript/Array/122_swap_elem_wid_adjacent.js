const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);});
inp.on("close",()=>{
    var a=n[1].split(" ");
    var b=[]
    for(var i=0;i<a.length-1;i++){
        c=a[i+1] //3
        d=a[i] //1
        b.push(c);
        b.push(d);
        i=i+1
    }
    if(n[0]%2!=0){
        b.push(a[a.length-1])
    }
    console.log(b.join(" "));
})
