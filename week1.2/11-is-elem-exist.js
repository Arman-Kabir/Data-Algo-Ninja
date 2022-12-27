
// Check the element of first array and second array
// if element exists
// return true
// otherwise false

// input - arr1--['a','b','c']  arr2--[1,2,3,'z'] // false
// input - arr1--['a','b','c']  arr2--[1,2,3,'c'] // true

function isElementExists(arr1, arr2) {
    // flag variable
   let exists = false;

    for (let elm of arr1) {

        if (arr2.includes(elm)) {
            exists = true;
            break;
        }
        // console.log(elm);
    }
    console.log(exists);
    return exists;
}
// isElementExists(['a', 'b', 'c'], [1, 2, 3, 'c']);
console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'b']));

// time complexity --- O(n^2) or, O(n*m)
// space complexity --- O(1)
// one loop inside other loop ----- O(n^2)