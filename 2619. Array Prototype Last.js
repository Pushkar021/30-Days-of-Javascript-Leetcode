/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  let x = this.length;
  if (x == 0) {
    return -1;
  }
  return this[x - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
