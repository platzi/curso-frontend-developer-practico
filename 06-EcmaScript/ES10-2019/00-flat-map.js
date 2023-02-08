// flat
const array = [32, 43, [78, 105, 43], [206, 703, 198]];
console.log(array.flat(5));

// flatmap
const array2 = [1, 2, 3, 4];
const flatMapArray = array2.flatMap(v => [v * 2]);
console.log(array2); // [ 1, 2, 3, 4 ]
console.log(flatMapArray); // [ 2, 4, 6, 8 ]