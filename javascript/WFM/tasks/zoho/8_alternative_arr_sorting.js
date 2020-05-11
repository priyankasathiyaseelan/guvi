const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
var n=[];
inp.on("line",(data)=>{
  n.push(data);
});
inp.on("close",()=>{
    var r=[],d=[];
    var a=n[0];
    var arr=n[1].split(" ");
    var c=arr.sort(function(a,b){
    return a-b;
 });
  for(var i=c.length-1;i>=0;i--)
  {
      d.push(parseInt(c[i]));
  }
  var p=parseInt(a/2);
  if(a%2!==0)
 {
     p=p+1;
 }
 for(var j=0;j<p;j++)
 {
     r.push(parseInt(d[j]),parseInt(c[j]));
 }
 var u= [...new Set(r)];
 console.log(u.join(" "));
});

//input:
//5 1 7 11 16 19
//output:
//19 1 16 7 11
