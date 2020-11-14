// https://lodash.com/docs/4.17.15#flatten
// 1階層無くす

import _ from "lodash";
console.log(_.flatten([1,[2,[3,[4]]],5]));
// => [1, 2, [3, [4]], 5]

// スプレッド演算子を使えば配列を1階層バラすことができる
const array = [2,[3,[4]]];
console.log(...array);

const flatten = (array: any[]): any[]=> {
    const flattenedArray = [];
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        if(Array.isArray(value)){
            flattenedArray.push(...value);
        }else{
            flattenedArray.push(value);
        }
    }
    return flattenedArray;
};

console.log(JSON.stringify(flatten([1,[2,[3,[4]]],5])));