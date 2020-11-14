import _, { includes } from "lodash";
console.log(_.union([2], [1, 2], [1,2,[3,4]]));
// => [2, 1]

// 配列を分解して合体する
// ユニークな値のみ抽出する
// 配列に格納して返す

const union = (...array: any[]) => {
    const flat = [].concat(...array);
    const result: number[] = [];
    for (let i = 0; i < flat.length; i++){
        if(!result.includes(flat[i])){
            result.push(flat[i]);
        }
    }

    console.log(result);
}


union([2], [1, 2], [1,3]);