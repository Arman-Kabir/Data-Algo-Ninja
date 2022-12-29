// Using power of HashTable to track down the data or data with count(frequency counter).
// This pattern uses objects or sets to collect values/frequencies of values.
//  This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

// **** HashTables known as Objects in JS, as dictionaries in Python.

//** */ Problem : Is Array Same
//* Write a function which accepts two arrays and check every value of the first array
//  has it's corresponding in second array.
// The Frequency value must be same.


// splice modifies the original array
// time complexity -- O(n*m)
// space complexity -- O(1).
function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);

        let index = arr2.indexOf(arr1[i]);
        console.log(index);

        // We havn't found the index
        if (index === -1) {
            return false;
        } else {
            arr2.splice(index, 1);
        }
        console.log(arr1[i], arr2);
    }
    // console.log(arr2);
    return true;
}

// isSame([1, 2, 4, 5], [1, 4, 5, 2,1])



// efficiently doing above solution
// time complexity -- O(n)
// space complexity -- O(n+m)
function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const hashTable1 = {

    }

    const hashTable2 = {

    }
    for (let num of arr1) {
        hashTable1[num] = (hashTable1[num] || 0) + 1
    }
    console.log(hashTable1);

    for (let num of arr2) {
        hashTable2[num] = (hashTable2[num] || 0) + 1
    }

    for (let elm in hashTable1) {
        if (!elm in hashTable2 || hashTable1[elm] !== hashTable2[elm]) {
            return false;
        }
        console.log(elm);
    }

    return true;
    // console.log(hashTable2);
}

console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]));
console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2, 1]));




