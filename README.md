# TS-Distinct
distinct function for common usage

## Installation
```
npm install --save ts-distinct
```

or 

```
yarn add ts-distinct
```

## Examples

```
import { distinct } from 'ts-distinct';

const arr = distinct([1, 2, 3, 2, 3, 3, 4, 5]);
 
console.log(arr); // [1, 2, 3, 4, 5]
```

```
import { distinct } from 'ts-distinct';

const arr = distinct(
    [{id: 1}, {id: 2}, {id: 3}, {id: 2}, {id: 3}, {id: 3}],
    ( o ) => o.id
);
 
console.log(arr); // [{id: 1}, {id: 2}, {id: 3}]
```
