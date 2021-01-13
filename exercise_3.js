/* 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8] */

let recursive_range = (start, stop, arr) => {
    return start != stop ? (arr.push(start), recursive_range(start+1, stop, arr)) : arr;
}

let range = (start, stop) => {
    let recursive_range_inside_function = (start, stop, arr) => {
        return start != stop ? (arr.push(start), recursive_range_inside_function(start+1, stop, arr)) : arr
    }
    return recursive_range_inside_function(start, stop, new Array());
}

console.log(range(2, 9, new Array()));