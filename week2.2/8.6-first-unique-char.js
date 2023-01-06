// lc - 387. First Unique Character in a String

function firstUniqueChar(s) {
    const hashT = {};
    for (let elm of s) {
        hashT[elm] = (hashT[elm] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        const want = s[i];
        if (hashT[want] === 1) {
            return i
        }
    }
    return -1;
    console.log(hashT);
}

console.log(firstUniqueChar('leetloot'));