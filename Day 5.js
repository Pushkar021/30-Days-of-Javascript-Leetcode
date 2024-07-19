var map = function (arr, fn) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = fn(arr[i], i);
  }
  return newarr;
};

const arr = [1, 2, 3]; // Define the input array
const fn = (element, index) => element + index;

let result = map(arr, fn);
console.log(result); // Output: [1, 3, 5]
