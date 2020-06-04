//Problem : 3.1
//if the give number is even

function demoFun(num,even){
    if(num % 2 == 0){
        even()
     }
}
function demoFun1(){
    console.log("even");  //even
}
demoFun1(10,demoFun);


