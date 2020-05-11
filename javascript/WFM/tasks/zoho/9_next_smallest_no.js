const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
    var a=n[0];
    var b=n[1].split(" "),c=[];
    var count;
    var t=-1;
    for(var i=0;i<b.length;i++)
    {
        count=0;
        for(var j=i+1;j<=b.length;j++)
        {
        if(parseInt(b[i])>parseInt(b[j]))
        {
        count=1;
        c.push(parseInt(b[j]));
        break;
        }
        }
        if(count===0)
{
        c.push(parseInt(t));
}
        }
        console.log(c.join(" "));
});

//input:
//7
//10 7 9 3 2 1 15
//output:
//7 3 3 2 1 -1 -1
