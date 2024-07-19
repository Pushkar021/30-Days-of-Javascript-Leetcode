let arr = [];
let i;

var reduce = (arr, fn, init) => {
  if (arr.length === 0) {
    return init;
  } else {
    for (i = 0; i < arr.length; i++) {
      init = fn(init, arr[i]);
    }
    return init;
  }
};

let fn1 = function fn(sum, arr1) {
  return sum + arr1;
};

let arr1 = [1, 2, 3, 4];
console.log(reduce(arr1, fn1, 0));
