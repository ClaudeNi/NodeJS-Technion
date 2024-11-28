// קלוד ניג'ם
// array of numbers
let arr = [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 0];
// count of zeroes
let count = 0;

// go over array arr and count zeroes
for (let i = 0; i < arr.length; i++) count += arr[i] === 0 ? 1 : 0;

// print number of zeroes found in arr
console.log(count);
