// create a range

// iterative soln
// function createRange(num1, num2) {
//     let rangArr = [];
//     for (let i = num1; i <= num2; i++) {
//         rangArr.push(i);

//     }
//     console.log(rangArr);

// }
// console.log(createRange(10, 20));


// recursive soln
// impure recursive solution
function createRange(num1, num2) {
    let rangArr = [];
    function helper(helperInput, targetNum=30) {
        rangArr.push(helperInput);
        // base case
        if (helperInput === targetNum) return targetNum
        helper(helperInput +1,targetNum)
    }
    helper(num1, num2)
    console.log(rangArr);
}
console.log(createRange(10,20));