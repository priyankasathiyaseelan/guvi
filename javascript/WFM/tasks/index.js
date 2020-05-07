const fun = (arr,callback) => {
  for(var i=0;i<arr.length;i++){
    if(callback(arr[i]))
      {
        return i
      }
  }
}
const indfun =(value)=>value==2
fun([2,1,5,10,14], indfun) 

//output:
//0
