const fun = (arr,callback) => {
  let a=[];
  for(var i=0;i<arr.length;i++){
    a.push(callback(arr[i]));
  }
  return a
}
const mapfun =(value)=>Math.sqrt(value);
fun([5,3,7], mapfun) 

//output:
//[2.23606797749979, 1.7320508075688772, 2.6457513110645907]
