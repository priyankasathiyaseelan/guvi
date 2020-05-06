const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on('line',(data)=>{
    n.push(data);
});
inp.on('close',()=>{
     var b=a[0].split(" ");
    var c=[];
    function every(){
        for(var i=0;i<b.length;i++)
        {
             if(parseInt(b[i])>=18)
             {
                
                c.push(b[i])
             }
            
        }
        if(c.length===b.length)
        {
            return "true"
        }
        else
        {
            return "false"
        }
        
    }
    console.log(every());
});
