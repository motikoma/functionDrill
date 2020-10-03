// https://lodash.com/docs/4.17.15#join
import _ from "lodash";
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'

const array = ['a', 'b', 'c'];
console.log(array.join("~"));

function join(array, separator = ',') {
  const copiedArray = [...array];

  let joinedString = copiedArray.shift();
  for(let i = 0; i < copiedArray.length; i++) {
    joinedString += separator + copiedArray[i];
  }

  return joinedString;
}

console.log( join(['a', 'b', 'c'], '---') );
// => 'a~b~c'