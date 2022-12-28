// Check provided string is palindrome.
// if palindrome return true otherwise false

// non-alphanumeric character should be ignored

// palindrome("race car") should return true
// palindrome("not a palindrome") should return false

function pallindrome(str) {
    // [0-9A-Za-z] - these are alphanumeric character. --- [\w].
    //  All except these are non-alphanumeric. --- [\W]... ---> []-> set

    const re = /[\W_]/g

    const normalizeStr = str.toLowerCase().replace(re,'');
    const reverseStr = normalizeStr.split('').reverse().join('');

    return normalizeStr === reverseStr;

    console.log(normalizeStr,reverseStr);
}

console.log(pallindrome("race _car"));
console.log(pallindrome("not a palindrome"));