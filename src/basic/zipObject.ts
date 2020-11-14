// 2つの配列を組み合わせてオブジェクト化する
// https://lodash.com/docs/4.17.15#zipObject
import _ from "lodash";
console.log(_.zipObject());

// TypeScript：インデックスシグネチャが型安全を破壊する例
// https://qiita.com/aakasaka/items/0b081c90b1b99b82143c

const props = ["a","b","c"];
const values = [1,2,3];

const zipObject = (props: string[] | number[], values: string[] | number[]): {} => {
    interface IzippedObject {
        [key: string]: string | number;
    }
    const zippedObject: IzippedObject = {};
    for (let i = 0; i < props.length; i++){
        const prop = props[i];
        const value = values[i];
        zippedObject[prop] = value;
    }
    return zippedObject;
};

console.log(zipObject(props, values));