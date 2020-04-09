const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=parseInt(n[0])
    var b=n[1].split(" ")
    var c=0
    var d=[]
    var r=[]
    var f=[];
  for(var i=0;i<a;i++){
      for(var j=i+1;j<a;j++){
          if(b[i]===b[j]){
              c=1;
          }

      }
      if(c!=1)d.push(b[i]);
      else r.push(b[i])
      c=0;
  }
        for(var k=0;k<d.length;k++){
          if(r.indexOf(d[k])===-1){f.push(d[k]);}
      }

  console.log(f.sort().reverse().join(" "));
});
