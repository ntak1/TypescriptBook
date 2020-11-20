"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise2 = exports.promise = exports.result = void 0;
// Declare a function of type Filter
let filter1 = (array, f) => {
    const result = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (f(array[i])) {
            result[j] = array[i];
            j++;
        }
    }
    return result;
};
exports.result = filter1([1, 2, 3], (n) => n % 2 == 0);
let filter2 = (array, f) => {
    return array;
};
// Using generics on maps
function map(array, f) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
// Promises
const resolve = () => console.log("Resolved!");
const reject = () => console.log("Rejected!");
// A promise that resolves to void
exports.promise = new Promise(resolve);
// A promise that resolves to a number
exports.promise2 = new Promise((resolve) => resolve(45));
//# sourceMappingURL=chapter5.js.map