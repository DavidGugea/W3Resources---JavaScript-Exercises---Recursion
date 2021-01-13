/* 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */

function gcd_non_recursive(x, y){
    for(let i = Math.min(...[x, y]) ; i >= 0 ; i--){
        if(x % i == 0 && y % i == 0){
            return i;
        }
    }

    return 1;
}

function gcd_recursive(x, y, i=Math.min(...[x, y])){
    return (x%i == 0 && y % i == 0) ? i : gcd_recursive(x, y, i-1);
}

function gcd_recursive_safe(x, y){
    let i = Math.min(...[x, y]);
    let inside_gcd_recursive_function = (x, y, i) => (x % i == 0 && y % i == 0) ? i : inside_gcd_recursive_function(x, y, i - 1);

    return inside_gcd_recursive_function(x, y, i);
}

console.log(gcd_recursive_safe(10 , 15));
console.log(gcd_recursive_safe(50 , 10));