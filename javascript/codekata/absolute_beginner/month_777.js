const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(n)=>{
  if(n==1 || n==3 || n==5 || n==7 || n==8 || n==10 || n==12){
    console.log("31");}
  if(n==4 || n==6 || n==9 || n==11){
    console.log("30");}
  if(n==2){
    console.log("28");}
  else{
	console.log("Error");}
});
 
