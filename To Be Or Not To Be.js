function expect(n) {
  const obj = {
    toBe: function (m) {
      if (n === m) return true;
      else {
        throw Error("Not Equal");
      }
    },
    notToBe: function (x) {
      if (n !== x) return true;
      else {
        throw Error("Equal");
      }
    },
  };
  return obj;
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
