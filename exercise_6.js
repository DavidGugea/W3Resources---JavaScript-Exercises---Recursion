/* 6. Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. 
*/

let fibonacci_sequence_recursive = (n, kts=0, x=0, y=1, rv = 0) => kts === n-1 ? y : (rv = y, y+=x, x=rv,fibonacci_sequence_recursive(n, kts+1, x, y)); 

console.log(fibonacci_sequence_recursive(9));