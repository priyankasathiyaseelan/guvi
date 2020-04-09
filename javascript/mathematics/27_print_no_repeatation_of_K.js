const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var sum=0;
    var a=n[0].split(' ');
    var b=n[1].split(' ');
    for(i=0;i<a[0];i++)
    {
        if(a[1]==b[i])
        {
            sum=sum+1;
        }
    }
console.log(sum-1);
});
