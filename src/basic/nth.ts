import _ from "lodash";
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1);
// => 'b'
_.nth(array, -2);
// => 'c';

const array2 = ["a","b","c","d"];
const nth = (array2: string[] | number[], n = 0): string | number => {
    return n >= 0 ? array2[n] : array2[array2.length + n];
}

console.log(nth(array2, 0));



