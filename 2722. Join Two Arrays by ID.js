/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (result[arr2[i].id]) {
      for (let data in arr2[i]) {
        result[arr2[i].id][data] = arr2[i][data];
      }
    } else {
      result[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(result);
};

//

//in my first attempt timelimit exceed

//var join = function(arr1, arr2) {
//     let arr3 = arr1.concat(arr2);

//     arr3.sort((a, b) => a.id - b.id);

//     for (let i = 0; i < arr3.length - 1; i++) {
//         if (arr3[i].id === arr3[i + 1].id) {

//             arr3[i] = { ...arr3[i], ...arr3[i + 1] };

//             arr3.splice(i + 1, 1);

//             i--;
//         }
//     }

//       return arr3;
// };
