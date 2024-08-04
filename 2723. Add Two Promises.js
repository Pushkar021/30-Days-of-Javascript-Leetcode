var addTwoPromises = async function (promise1, promise2) {
  return new Promise((res, rej) => {
    promise1.then((val1) => promise2.then((val2) => res(val1 + val2)));
  });
};
