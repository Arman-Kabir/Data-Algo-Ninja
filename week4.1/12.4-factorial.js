// factorial
// 5! =5*4*3*2*1  .... 0!=1

// iterative
function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
        console.log(i);
    }
    console.log(result);
}
console.log(factorial(5));


// recursive
function factorial(num) {
    // must have a base case 
    if(num===0 ) return 1
    return num * factorial(num - 1);
}

console.log(factorial(5));