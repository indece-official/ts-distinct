import { distinct } from '../src/index';

const arr1 = distinct([1, 2, 3, 2, 3, 3, 4, 5]);
 
console.log(arr1); // [1, 2, 3, 4, 5]


const arr2 = distinct(
    [{id: 1}, {id: 2}, {id: 3}, {id: 2}, {id: 3}, {id: 3}],
    ( o ) => o.id
);
 
console.log(arr2); // [{id: 1}, {id: 2}, {id: 3}]
