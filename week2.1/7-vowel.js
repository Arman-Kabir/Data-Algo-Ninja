// Write a function that returns the number of vowels

// a,e,i,o,u
function vowels(str) {
    let count = 0;
    const collectedVowels = ['a', 'e', 'i', 'o', 'u'];


    for (let char of str.toLowerCase()) {
        // if(collectedVowels.includes(char)){
        //     count++;
        // }
        if (char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u') {
            count++;
        }
        
    }

    return count;
}

console.log(vowels('why?'));