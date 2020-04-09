const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=[]
    n=data.split();
    var a=n[0];
    var b=0;
    for(i=1;i<parseInt(a);i++)
    {
        if((parseInt(a)%parseInt(i))==0)
        {
            b=i;
        }
    }
    if(parseInt(b)>1)
    {
        console.log('yes');
    }
    else{
        console.log('no');
    }
});
