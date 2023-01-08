
function areThereDuplicates(arr) {
    let i = 0; let j = 1;
    while (i < arr.length) {
        if (arr[i] === arr[j]) return true
        i++;
        j++;

    }
    return false;
}

console.log(areThereDuplicates([1, 1, 1, 1, 1, 2]));