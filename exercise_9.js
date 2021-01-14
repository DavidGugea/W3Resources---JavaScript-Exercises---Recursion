/*
9. Write a merge sort program in JavaScript. Go to the editor
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
*/

const merge_two_arrays = (a1, a2) => {
    let c = new Array();

    while(a1.length && a2.length){
        c.push(a1[0] > a2[0] ? a2.shift() : a1.shift());
    }

    while(a1.length){
        c.push(a1.shift());
    }

    while(a2.length){
        c.push(a2.shift());
    }

    return c;
}

const merge_sort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);

    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid, arr.length);

    let sorted_left_side = merge_sort(arr1);
    let sorted_right_side = merge_sort(arr2)

    return merge_two_arrays(sorted_left_side, sorted_right_side);
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(arr);
arr = merge_sort(arr);
console.log(arr);