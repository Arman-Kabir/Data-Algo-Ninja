// iterative
// function sumRange(num1, num2) {
//     let total = 0;
//     for (let i = num2; i >= num1; i--) {
//         console.log(i);
//         total +=i;
//     }
//     console.log(total);

// }
// sumRange(1, 10);

/*

*/

// recursive
function sumRange(num) {
    // base case
    if (num === 0) return 0;
    return num+sumRange(num-1);

}
console.log(sumRange(10));