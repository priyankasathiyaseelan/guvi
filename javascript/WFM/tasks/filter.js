const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on('line',(data)=>{
    n.push(data);
});
inp.on('close',()=>{
     var b=n[0].split(" ");
  var c=[];
    function filter(){
      for(var i=0;i<b.length;i++)
      {
         if(b[i]>50)
         {
             c.push(b[i]);
         }
      }
      return c.join(" ");
    }
    var res=filter();
    console.log(res);
});
