/* 8. Write a JavaScript program for binary search. Go to the editor
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5' */

function bsr(array, number){
    let return_index;

    let binary_search_recursive = (array, number, left_index=0, right_index=array.length-1) => {
        // console.log(left_index, right_index);
        if(left_index === right_index-1){
            console.log("A")
            if(number === array[left_index]){
                return_index = left_index;
                return;
            }else if(number === array[right_index]){
                return_index = right_index;
                return;
            }else{
                return_index = false;
                return;
            }
        }else{
            let mp_index = Math.floor((left_index + right_index)/2);
            let mp = array[mp_index];
            if(number === mp){
                return_index = mp_index;
                return;
            }else if(number < mp){
                right_index = mp_index-1;
            }else if(number > mp){
                left_index = mp_index+1;
            }

            binary_search_recursive(array, number, left_index, right_index);
        }
    }

    binary_search_recursive(array, number);
    return return_index;
}

let x = [1, 2, 3, 5, 7, 8, 13];
console.log(bsr(x, 1));
console.log(bsr(x, 2));
console.log(bsr(x, 3));
console.log(bsr(x, 5));
console.log(bsr(x, 7));
console.log(bsr(x, 8));
console.log(bsr(x, 13));