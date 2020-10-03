// https://lodash.com/docs/4.17.15#initial
import _ from "lodash";
_.initial([1, 2, 3]);
// => [1, 2]

const initial = <T>(array: T[]) => {
    array.pop();
    return array;
}

console.log(initial([1,2]));