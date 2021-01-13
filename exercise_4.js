/* 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

// MY SOLUTION : 
let compute_sum_recursive = (arr, i=0, sum) => {
    sum += arr[i];
    i++;

    return i == arr.length ? sum : compute_sum_recursive(arr, i, sum);
}

// THEIR SOLUTION : 
let array_sum = (my_array) => {
    // I've understood their method
    if(my_array.length === 1) {
        return my_array[0];
    }
    else{
        return my_array.pop() + array_sum(my_array);
    } 
}

console.log(array_sum([1, 2, 3, 4, 5, 6]));