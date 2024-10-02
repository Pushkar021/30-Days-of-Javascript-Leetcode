/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map((x) => compactObject(x)).filter((x) => x);
  } else if (obj !== null && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      obj[key] = compactObject(obj[key]);
      if (!obj[key]) {
        delete obj[key];
      }
    });
    return obj;
  }
  return obj;
};
