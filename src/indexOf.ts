// https://lodash.com/docs/4.17.15#indexOf

import _ from "lodash";
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3

// JSの組込メソッドとして存在する
const beasts: string[] = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf("bison",2));

// const arrayOf2 = (array, value, fromIndex = 0) => {
//     for (let i = fromIndex; i < array.length; i++) {
//         if(array[i] === value){
//             return i
//         }
//     }

//     return -1;
// }

// console.log(arrayOf2(beasts, "bison"));