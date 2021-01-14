/* 7. Write a JavaScript program to check whether a number is even or not. */

let recursive_even = (number) => number == 0 ? true : (number < 0 ? false : recursive_even(number - 2));

console.log(recursive_even(17));