// Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five,
//  and “FizzBuzz” if an integer is divisible by both three and five.
function fizzBuzz(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            // console.log('Fizz');
            result += 'FizzBuzz \n';
        } else if (i % 3 === 0) {
            // console.log('Buzz');
            result += 'Fizz \n';
        } else if (i % 5 === 0) {
            // console.log('FizzBuzz');
            result += 'Buzz \n';
        } else {
            // console.log(i);
            result += i + '\n';
        }
    }
    return result;
}

console.log(fizzBuzz(100))
