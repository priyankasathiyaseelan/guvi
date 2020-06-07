//1 - Chunk :
//Creates an array of elements split into groups the length of size. 
//If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(array, size) {
  const empty_arr = [];
  var count = 0;
  while(count < array.length) {
    empty_arr.push(array.slice(count,size + count));
    count += size;
  }
  return empty_arr;
}
console.log(chunk([1,2,3,4,5],2));     //[Array(2), Array(2), Array(1)]

