function maxSubarraySum(arr,n) {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    };
    tempSum = maxSum;


    // You've added the first three (n) elements in the array together above (arr[0] + arr[1] + arr[2]) to get the first maxSum in the array, then set the tempSum to the value of maxSum.

    // tempSum will be used as the 'sliding window' value, which will be compared to maxSum in the next step, and if it is larger value, it will become the new maxSum.

    // Next, you will iterate through the array again to add the next three consecutive elements together after the value at the first index. This means the new value of tempSum will be arr[1] + arr[2] + arr[3].

    // To achieve this in the for loop, in the first iteration we subtract the value at the left index arr[0] and add the new value at the right index arr[3]. This continues throughout the entire length of the array.


    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]

        if (tempSum > maxSum) {
            maxSum = tempSum
        }  
        // maxSum = Math.max(maxSum, tempSum)
        
    }

    return maxSum;
}


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

// 17

// [ 2,6,9 ] ,2,1,8,5,6,3
// tempSum = 17
// maxSum = 17


// 1st It.
// 2, [ 6,9,2 ] ,1,8,5,6,3
// tempSum = 17 - 2 + 2 = 17
// maxSum = 17

// 2nd It.
// 2,6, [ 9,2,1 ] ,8,5,6,3


