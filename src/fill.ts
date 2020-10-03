// 配列の最後から指定した数だけ値を除外した配列を返す
// https://lodash.com/docs/4.17.15#fill

import _ from "lodash";
console.log(_.fill([4, 6, 8, 10], '*', 1, 6));


const fill = <T,U>(array: T[], value: any, start: number = 0, end: number = array.length): any[] => {
    for (let i = 0; i < array.length; i++){
        if(i > start - 1 && i < end){
            array[i] = value;
        }
    }
    return array;
}

console.log(fill([4, 6, 8, 10], 'a', 0, 5));