//  This pattern involves creating a window which can either
//  be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a 
// new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Brute Force-1 - not proper soln
// function maxSubArraySum(arr, n) {
//     let max_sum = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] + arr[i + 1] > max_sum) {
//             max_sum = arr[i] + arr[i + 1];
//         }
//     }
//     return max_sum;
// }

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));


// brute force-2- not proper soln
// function maxSubArraySum(arr, n) {
//     let max_sum = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] > max_sum) {
//                 max_sum = arr[i] + arr[j];
//             }
//         }
//     }
//     return max_sum;
// }
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));



// Brute-Force- proper soln
// function maxSubArraySum(arr, num) {
//     if (arr.length < num) {
//         return null;
//     }
//     let max = -Infinity;

//     console.log(arr.length - num + 1);
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let tempSum = 0;
//         for (let j = 0; j < num; j++) {
//             // console.log(arr[i + j]);
//             tempSum += arr[i + j];
//         }
//         max = Math.max(tempSum, max);
//         console.log(tempSum);
//     }
//     return max;
// }
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));

/*
1+2=3
2+5=7
5+2=7
2+8=10
*/


// efficient soln
function maxSubArraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let max = -Infinity;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    tempSum = max;
    for (let j = num; j < arr.length; j++) {
        tempSum - tempSum[j - num] + arr[j];
        maxSum = Math.max()
        
    }
    console.log(tempSum);

}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));

/**
 * 1+2=3
 * 3-1+5=7
 * 7-2+2=7
 * 7-5+8=10
 * 10-2+1=9
 * 9-8+5=6
 * 
 */



