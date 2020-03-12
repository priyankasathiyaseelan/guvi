const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=[]
    a=data.split(' ');
    var n1=a[0]
    var n2=a[1]
  n1 = Math.abs(n1);
  n2 = Math.abs(n2);
  while(n2) {
    var t = n2;
    n2 = n1 % n2;
    n1 = t;
  }
  if(num>0){
console.log(t);}
else{
    console.log('-1');
}
});
