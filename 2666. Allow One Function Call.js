function once(fn) {
  let a = true;
  let b;
  return function (...args) {
    if (a) {
      a = false;
      b = fn(...args);
      return b;
    } else {
      return undefined;
    }
  };
}
