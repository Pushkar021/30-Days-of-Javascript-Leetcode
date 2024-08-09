var promiseAll = function (functions) {
  let count = 0
  return new Promise((resolve, rejects) => {
    let arr = new Array(functions.length);

   
    functions.forEach((res,i) => {
      res()
        .then((res) => {arr[i] = res
                        count++
                       if(count===functions.length){
                          resolve(arr)
                       }})
        .catch((e) => rejects(e));
    });
 
  });
};