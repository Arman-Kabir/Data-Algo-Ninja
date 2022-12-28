// Given a string, return a new string with the reversed order of characters

function reverse(str) {
    let revStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     console.log(i);
    //     console.log(str[i]);
    //     revStr += str[i];
    //     console.log(revStr);
    // }

    // for (let char of str) {
    //     revStr = char+revStr;
    //     console.log(revStr);
    // }

    // return revStr;

    // JS built-in methods
    const reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
    return reverseStr;
}

console.log(reverse('hello'));

