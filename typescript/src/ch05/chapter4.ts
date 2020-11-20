// Define a type to a function
type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[];
};

// Declare a function of type Filter
let filter1: Filter<number> = (
  array: number[],
  f: (item: number) => boolean
) => {
  const result: number[] = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {
      result[j] = array[i];
      j++;
    }
  }
  return result;
};

export const result = filter1([1, 2, 3], (n) => n % 2 == 0);

let filter2: Filter<number> = (array, f: (item: number) => boolean) => {
  return array;
};

// How do I use this?
type Filter2 = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

// Map transfoms each element of the array of elements T, so it can be an instance of a new type U
type MyMap<T, U> = {
  (array: T[], f: (item: T) => U): U[];
};

// Using generics on maps
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

// Promises
const resolve = () => console.log("Resolved!");
const reject = () => console.log("Rejected!");
// A promise that resolves to void
export let promise = new Promise<void>(resolve);
// A promise that resolves to a number
export let promise2 = new Promise<number>((resolve) => resolve(45));
