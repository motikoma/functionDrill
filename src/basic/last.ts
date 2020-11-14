import _ from "lodash";
_.last([1, 2, 3]);
// => 3

const last = (array: number[]): number => {
    return array.slice(-1)[0];
};

const array2 = [1,2,3];
console.log(last(array2));
console.log(array2);