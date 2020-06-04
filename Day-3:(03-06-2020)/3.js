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

//Problem: 3.2 
//if the given number is prime

function demoFun(num,prime){
var x=0
for(var i=2;i<num;i++){
if(num%i == 0){
x=1
break;
}
}
if(x == 0){
prime()
}
}
function prime(){
console.log("Yes")
}
demoFun(4,prime)
console.log("No");   //No

//Problem: 3.3
//if the number is palindrome

function demoFun(num,palindrome){
var arr=num.split('').reverse().join('')
if(arr == num){
palindrome()
}
}
function palindrome(){
console.log("Yes,it is Palindrome")  //Yes,it is Palindrome
}
demoFun('MoM',palindrome)




