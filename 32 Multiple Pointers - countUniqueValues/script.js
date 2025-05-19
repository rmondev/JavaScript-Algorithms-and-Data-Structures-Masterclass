function countUniqueValues(arr) {


    // a 0 length array, returns 0 unique numbers
    if (arr.length === 0) { return 0 };

    // passing the last check, ensures there is at least one unique value in the array
    let count = 1;

    // iterate the array, starting from the 2nd element
    for (let i = 1; i < arr.length; i++) {

        // compare right to left values
        let right = arr[i];
        let left = arr[i - 1];

        if (right != left) {
            count++;
        }
    }
    
    return count;
    
}

console.log(countUniqueValues([-2,-1,-1,0,1]))