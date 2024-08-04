/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let prevvalue = [];

  return function (...args) {
    if (prevvalue[a + b] != null) {
      return prevvalue[a + b];
    }
    let result = 0;
    result = a + b;
    prevvalue[result] = result;
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
