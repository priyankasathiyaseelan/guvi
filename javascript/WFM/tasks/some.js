const fun = (arr,callback) => {
   for(var i=0;i<arr.length;i++){
    if(callback(arr[i]))
      {
        return true
      }
  }
  return false
}
const somefun =(value)=>value%3==1
fun([2,3,5,8,14], somefun) 

//output:
//false
