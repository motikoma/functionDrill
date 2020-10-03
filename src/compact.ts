// 引数の中からfalsyな値を排除した新しい配列を返す

import _ from "lodash";
console.log(_.compact([0, null]));

const compact = <T>(array: T[]) => {
    const compactedValues: T[] = [];
    for (let i = 0; i < array.length; i++){
        if(array[i]){
            compactedValues.push(array[i])
        }
    }
    return compactedValues;
};

console.log(compact([0, null,1]));