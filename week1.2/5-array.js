// Array and object(performance) - We measure it using - Big(O)
// How to approach a problem

const arr = ['a', 'b', 'c'];
//            0   1   2
console.log(arr.length);
// access by index O(1)
console.log(arr[arr.length - 1]);


// adding item/element at the end of the array O(1)
// arr[arr.length] = 'd';
arr.push('d');
console.log(arr);


// removing element from the end of the array ... time complexity O(1)...
arr.pop();
console.log(arr);


// adding element at the beginning of an array  --- O(n)
arr.unshift('z');
console.log(arr);


// removing element at the beginning of an array  --- O(n)
arr.shift('z');
console.log(arr);


// finding element from an array O(n)
for (let elm of arr) {
    if (elm === 'c')
        console.log(true);
}

console.log(arr);

// forEach,map,filter,reduce,slice,splice   --- O(n) . Loop runs in these methods and studies step by step.


const arr2 = ['a', 'b', 'c',['d','e']];
//             0    1    2    3[0,1]
console.log(arr2[3][1]);




