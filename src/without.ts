// 指定した引数に該当しない値のみ抽出する
// https://lodash.com/docs/4.17.15#without
import _ from "lodash";
console.log(_.without(["a","b","c"],"a","b"));

const without = <T>(array: T[], ...values: T[]): T[] => {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        const candidateToPush = array[i];
        if(!values.includes(candidateToPush)){
            newArray.push(candidateToPush);
        }
    }
    return newArray;
};

console.log(without(["a","b","c"],"a","b"));