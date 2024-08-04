var debounce = function (fn, t) {
  let timeoutid;
  return function (...args) {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => fn(...args), t);
  };
};
