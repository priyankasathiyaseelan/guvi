const fun = (arr,callback) => {
  let a=[];
  for(var i=0;i<arr.length;i++){
    if(callback(arr[i]))
      {
        a.push(arr[i]);
      }
  }
  return a
}
const filfun =(value)=>value%2==0
fun([2,10,3,14,20,24], filfun) 

//output:
//[2, 10, 14, 20, 24]
