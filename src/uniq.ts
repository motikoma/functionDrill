// https://lodash.com/docs/4.17.15#uniq
// 引数の中からユニークな値のみ抽出した新しい配列を返す

import _ from "lodash";

const array1 = [2,1,2];
const array2 = _.uniq(array1);
console.log(array1);
console.log(array2);

const array = [1,2,2];
const uniq = <T>(array: T[]) => {
    const uniqArray: T[] = [];
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        if(!uniqArray.includes(value)){
            uniqArray.push(value);
        };
    }
    return uniqArray;
}

console.log(uniq(array));
