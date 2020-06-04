//Do the below program in an Anonymous function:

//Problem : 1
//Print odd numbers in an array
var arr = [];
var odd = function(odd){
  for(var i = o;i < 10; i++){   //iteration 
    if(i % 2! = 0){
      arr.push(i);   //push odd array
    }
  }
  console.log(arr);
}
odd(9);

//Problem : 2
//Convert all the strings to title caps in a string array 

var demoFun = ["guvi","geek","integra"];
var arr = function(arr)
{
var arr1 = []
for(var i=0;i<demoFun.length;i++)
{
var x = demoFun[i];
var y = (x[0].toUpperCase()+x.slice(1));  //converting UpperCase
arr1.push(y);
}
console.log(arr1);   //["Guvi", "Geek", "Integra"]
}
arr(demoFun);

//Problem : 3
//Sum of all numbers in an array

var array = [1,2,3,4,5];
var sum = function(s)
{
var count = 0;
for(i=0;i<array.length;i++)
{
count = count + array[i];
}
console.log(count);  //15
}
sum(array);  //call funtion

//Problem : 4
//Return all the prime numbers in an array 

var num = 10;
var prime = function(prime)  //anonymous function
{
arr = [];
for(i = 2;i < num;i++){
var count = 0;
for(j = 1;j <= i;j++){
if(i % j == 0){
count = count+1;
}
}
if(count == 2)
{
arr.push(i);   //push prime num into arr
}
}
console.log(arr.join(" "));   //2,3,5,7
}
prime(num);
