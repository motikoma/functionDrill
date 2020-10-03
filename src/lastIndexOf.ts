import _ from "lodash";
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1

const array = [1,2,3,2];

console.log(array.lastIndexOf(2));