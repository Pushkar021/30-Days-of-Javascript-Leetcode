var chunk = function (arr, size) {
  let a = [];
  while (arr.length > 0) {
    a.push(arr.splice(0, size));
  }
  return a;
};
