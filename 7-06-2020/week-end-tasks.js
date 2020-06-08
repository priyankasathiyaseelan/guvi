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

//3 - flatconcat
//Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.

function flat(arr1) {
  return arr1.reduce((accumulator, item) => {
    return accumulator.concat(item);
  }, []);
}
let arr1 = [[1, 2], 3, [4, 5]];
console.log(flat(arr1));     //[1,2,3,4,5]

//4 - drop
//Creates a slice of array with n elements dropped from the beginning.

function dropArray(arr,num) {
    var res = arr.slice(num);
    console.log(res);       //[1,2,3]
}
dropArray([1,2,3],2);

//5 - dropRight
//Creates a slice of array with n elements dropped from the end.

function dropRight(arr) {
    var res = arr.slice(0,2);
    console.log(res);       //[1,2]
}
dropRight([1,2,3]);

//6 - dropWhile
//Creates a slice of array excluding elements dropped from the end. 
//Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

function dropRightWhile(array){
	var newarray=array.filter(function(value,index,array){
		return value%2!==0;
	});
	return newarray
}
console.log(dropRightWhile([1,2,3,5]))      //[1,3,5]

//7 - findLastIndex
//This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left

function index(array)
{
var res = array.lastIndexOf(8);
console.log(res);     //4
}
index([5, 12, 6, 130, 8]);

//8 - flattenDeep
//Recursively flattens array.

function FlattenDeep(array){
console.log(array.flat(3));
}
FlattenDeep([1, [2, [3, [4]],  5]]);    //[1,2,3,4,5]

//9 - flattenDepth
//Recursively flatten array up to depth times.

function flattenDepth(array)
{
console.log(array.flat(2));     //[1, 2, 3, Array(1), 5]
}
flattenDepth([1, [2, [3, [4]],  5]]);

//10 - fromPairs
//this method returns an object composed from key-value pairs.

let array = ([['a', 1], ['b', 2]]);
let obj = Object.fromEntries(array1);
console.log(obj);   //{a: 1, b: 2}
