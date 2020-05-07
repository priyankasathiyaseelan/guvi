const fun = (arr,callback) => {
  var count=0;
  for(var i=0;i<arr.length;i++){
    if(callback(arr[i]))
      {
        count+=1;
      }
  }
  if(count==arr.length){
    return true
  }
  else
    {
      return false
    }
}
const mapfun =(value)=>value>0
fun([5,10,15,20,25], mapfun) 

// output:
// true
