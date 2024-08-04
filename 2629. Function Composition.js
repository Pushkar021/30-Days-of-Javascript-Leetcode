var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((prev, cur) => cur(prev), x);
  };
};
