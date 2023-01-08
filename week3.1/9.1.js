// Nested loops make O(n^2). To make it efficient O(n) -- we use hashTable.

// We now doing using two pointer
// sumZero

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    console.log(left,right);
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            right--
        }
        if (sum < 0) {
            left++
        }
    }
    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
                //