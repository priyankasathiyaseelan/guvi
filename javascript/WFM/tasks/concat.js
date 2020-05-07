const concat = (arr1,arr2) => {
  let a=arr1;
  for(var i=0;i<arr2.length;i++){
    a.push(arr2[i]);
  }
  return a
}
concat([1,2,3,4],[5,6,7,8])
