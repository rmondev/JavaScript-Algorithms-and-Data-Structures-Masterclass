
function maxSubarraySum(arr, n) {
    let tempSum = 0;
    let maxSum = 0;

    for(let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - (arr[i-n]) /** subtract value from previous index and add value in next index */ + arr[i];

        // if (tempSum > maxSum){
        //     maxSum = tempSum;
        // }

        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));