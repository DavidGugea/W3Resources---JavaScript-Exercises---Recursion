/* 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

const recursive_factorial = (n, a=n) => a > 1 ? recursive_factorial(n*(a-1), a-1) : n;
console.log(recursive_factorial(5));
