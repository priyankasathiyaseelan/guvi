const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
    var b=n[1].split(' ');
    var c=[]
    for(i=(a-1);i>0;i--)
        {
            var d=(parseInt(b[i-2])+parseInt(b[i-1])+parseInt(b[i]))
            break
        }
        for (j=0;j<=a-1;j++)
            {
                var e=b[j]-d;
                c.push(e);
            }
            console.log(c.join(" "))
});
