const uniqueValues = (arr) => {
  const obj = {};
  arr.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });

  console.log(Object.keys(obj).length);
};

console.log(uniqueValues([1, 1, 1, 1, 3, 54, 6]));
 