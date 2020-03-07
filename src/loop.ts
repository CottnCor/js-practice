/* jshint vesversion: 6 */

const array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index = 0; index < array.length; index++) {
    array[index] = array[index] * 2;
}

console.log(array);

for (const key in array) {
    if (array.hasOwnProperty(key)) {
        array[key] = array[key] * 2;
    }
}

console.log(array);

for (let iterator of array) {
    iterator = iterator * 2;
}

console.log(array);

// for (let [key, value] of array.entries()) {
//   value = value * 2;
// }

// for (let value of array.values()) {
//   value = value * 2;
// }

array.map((value, index) => {
    value = value * 2;
});

console.log(array);

array.forEach((value, index) => {
    value = value * 2;
});

console.log(array);

array.some((value, index) => {
    value = value * 2;
});

console.log(array);

array.reduce((pre, curr, index, arr) => {
    return pre + curr;
}, 10);

console.log(array);
