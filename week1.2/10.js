// PROBLEM: 

// count the character
// input - string 'Hello' output - {h: 1, e:1, l:2, o:1}
// input - string 'greet' output - {g: 1, r:1, e:2, t:1}

function countCharacter(str) {
    // creating an object for tracking the frequency of element
    const hashMap = {}

    // looping the input and generalize the case and
    const normalizeStr = str.toLowerCase();
    for (let i = 0; i < normalizeStr.length; i++) {

        // if there is any space ignore it       
        console.log(normalizeStr[i]);
        const char = normalizeStr[i];
        console.log(char);
        // hashMap[char] = 1;

        if (char === ' ') continue;

        // ternary
        // char in hashMap ? hashMap[char] = hashMap[char] + 1 : hashMap[char] = 1;

        // logical or
        hashMap[char] = (hashMap[char] || 0) + 1


        // if (char in hashMap) {
        //     // check if the element exists on the object increment the existence count value
        //     hashMap[char] = hashMap[char] + 1;
        // } else {
        //     // if not present assign the value 1
        //     hashMap[char] = 1;
        // }

        console.log(hashMap);

    }
    return hashMap;
    // console.log(hashMap);
}

// countCharacter('He llo');
console.log(countCharacter('Gree t'));

// The longer the string is , the more steps the loop runs. Time complexity --- O(n).*** If there's loop , it goes to --- O(n)
// Space complexity --- O(n)

// we can increase readability

// if special characters  --- use ascii table.....