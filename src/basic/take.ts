import _ from "lodash";
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []

const array1 = ["a","b","c"];
const take = <T>(array: T[], n = 1): T[] => {
    const takedArray = [];

    if(n === 0) return [];
    if(n > array.length) return [...array];

    for (let i = 0; i < n; i++){
        takedArray.push(array[i]);
    }
    return takedArray;
}

console.log(take(array1));






