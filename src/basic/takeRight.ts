import _ from "lodash";
_.takeRight([1, 2, 3]);
// => [3]
 
_.takeRight([1, 2, 3], 2);
// => [2, 3]
 
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// => []

const array = [1,2,3];
const newArray = array.slice(-2);
console.log(array);
console.log(newArray);