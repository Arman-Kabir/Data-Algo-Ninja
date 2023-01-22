// Binary search/ divide and conquer

// Array must be sorted in binary search

// In every steps -- 

// time complexity Big O ---O(n) 
// space complexity Big O --- O(1)

function searchElmIndex(arr, searchElm) {
    let low = 0;
    let hi = arr.length - 1;
    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2);
        let midVal = arr[mid];
        if (midVal === searchElm) return mid;
        if (searchElm > midVal) {
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

// searchElmIndex([1, 3, 5, 7, 9, 10], 7);
console.log(searchElmIndex([1, 3, 5, 7, 9, 10], 8));

/*
 0  1  2  3  4  5
[1, 3, 5, 7, 9, 10]             0 + 5/2 = 2.5 = 2 
 l     m         h

 0  1  2  3  4  5
[1, 3, 5, 7, 9, 10]             3 + 5/2 = 4 = 4 
          l  m   h

 0  1  2  3  4  5
[1, 3, 5, 7, 9, 10]             3 + 3/2 = 3 = 3
          l     
          h
          m

 0  1  2  3  4  5
[1, 3, 5, 7, 9, 10]             4 + 3/2 = 3.5 = 3
             l     
          h
          m




*/