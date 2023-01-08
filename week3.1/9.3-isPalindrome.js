function isPalindrome(s) {
    const normalizeStr = s.replace(/[\W_]/g, '').toLowerCase();
    console.log(normalizeStr);
    let left = 0;
    let right = normalizeStr.length - 1;
    while (left < right) {
        if (normalizeStr[left] !== normalizeStr[right]) return false;
        left++;
        right--;
    }
    return true
}

console.log(isPalindrome('a man, a plan,a canal: Panama'));
console.log(isPalindrome('race a car'));  
console.log(isPalindrome('ab_a'));  ;

//   amanaplanacanalpanama
//   l                   r