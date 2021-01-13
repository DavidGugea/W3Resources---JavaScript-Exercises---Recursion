/* 5. Write a JavaScript program to compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */ 

let exponent_recursive = (base, exp) => exp == 1 ? base : base * exponent_recursive(base, exp-1);

console.log(exponent_recursive(2, 7));