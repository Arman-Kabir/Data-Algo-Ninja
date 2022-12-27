
// time complexity  O(n+m) = O(n+n)=O(2n)=O(n)
// space complexity O(n)
function isElementExists(arr1, arr2) {

    const frequencyCounter = {};
    for (let elm of arr1) {
        frequencyCounter[elm] = true;
        // console.log(frequencyCounter);
    }

    for (let elm of arr2) {
        console.log(elm);

        if (elm in frequencyCounter) {
            return true;
        }
    }

    console.log(frequencyCounter);
}



console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'a']));