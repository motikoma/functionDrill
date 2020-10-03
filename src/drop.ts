// 配列の最初から指定した数だけ値を除外した配列を返す
// https://lodash.com/docs/4.17.15#drop

import _ from "lodash";
console.log(_.drop([1,2,3]));

const drop = <T>(array: T[], num?: number) => {
    const droppedArray = array.slice(num || 1);
    return droppedArray;
}

console.log(drop(["a","b","c"]));