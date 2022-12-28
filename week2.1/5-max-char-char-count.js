// 
// Given a String, return the character that is most used. 

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;

        // console.log(char);
        // console.log(charMap[char]);
    }

    for(let char in charMap){
        if(charMap[char]>max){
            max=charMap[char];
        }
        console.log(char);
    }
    console.log(charMap);
}

maxChar('apple,1231111');