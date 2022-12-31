// Searching
// indexOf (1,-1)
// includes (true,false)
// nested loop - O(n^2).

// linear search

// time complexity Big O ---O(n) 
// space complexity Big O --- O(1)
function searchElmIndex(arr, searchElm) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElm) return i;
        // console.log(arr[i]);
    }
    return -1;
}

searchElmIndex([1, 3, 5, 7, 9], 7);
console.log(searchElmIndex([1, 3, 5, 7, 9], 2));