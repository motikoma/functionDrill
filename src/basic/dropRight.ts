// 配列の最後から指定した数だけ値を除外した配列を返す
// https://lodash.com/docs/4.17.15#dropRight

import _ from "lodash";
console.log(_.dropRight([1,2,3],2));

const dropRight = <T>(array: T[], size: number = 1): T[] => {
    const droppedArray = [];
    for(let i = 0; i < array.length - size; i++){
        droppedArray.push(array[i]);
    }
    return droppedArray;
}

console.log(dropRight(["a",2,3]));