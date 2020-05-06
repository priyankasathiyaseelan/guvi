const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on('line',(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var a=n[0];
    var b=n[1];
    var c;
    function concat()
    {
        c=a+b;
        return c;
    }
    var res=concat();
    console.log(res);
});
