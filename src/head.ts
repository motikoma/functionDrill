// https://lodash.com/docs/4.17.15#head
// [1,2,3]

import _ from "lodash";
_.head([1, 2, 3]);
// => 1

const head = <T>(array: T[]) => {
    return array[0];
};

console.log(head([1,2,3]));