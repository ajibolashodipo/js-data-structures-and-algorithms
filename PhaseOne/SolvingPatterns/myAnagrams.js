const isAnagram = (str1, str2) => {
  //compare lengths
  if (str1.length !== str2.length) {
    return false;
  }

  //define objects
  const obj1 = {};
  const obj2 = {};

  //populate objects
  for (element of str1) {
    obj1[element] = (obj1[element] || 0) + 1;
  }
  for (element of str2) {
    obj2[element] = (obj2[element] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);

  for (el in obj1) {
    //compare keys. el here stands for keys btw
    if (!(el in obj2)) return false;
    //compare key-values
    if (obj1[el] !== obj2[el]) return false;
  }

  return true;
};

console.log(isAnagram("icemananagram", "cinemanagaram"));
