import _ from "lodash";

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
  console.log(_.takeWhile(users, function(o) { return !o.active; }));
  // => objects for ['barney', 'fred']
   
  // The `_.matches` iteratee shorthand.
  _.takeWhile(users, { 'user': 'barney', 'active': false });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.takeWhile(users, ['active', false]);
  // => objects for ['barney', 'fred']
   
  // The `_.property` iteratee shorthand.
  _.takeWhile(users, 'active');
  // => []

const takeWhiledArray = (array: any[], predicate: (value: any) => unknown) => {
    const tookValues: any[] = [];
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        if(!predicate(value)){
            break;
        }
        tookValues.push(value);
    }
    return tookValues;
}

console.log(takeWhiledArray(users, function(o) { return !o.active; }));