function createCounter(init) {
  let n = init;
  function increment() {
    return ++init;
  }
  function decrement() {
    return --init;
  }
  function reset() {
    init = n;
    return n;
  }
  return {
    increment,
    decrement,
    reset,
    n,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
