
// integer reversal

function reverseInt(num){
    let reverseNum = num.toString().split('').reverse().join('');

    if(reverseNum.endsWith('-')){
        reverseNum = '-' + reverseNum.slice(0,reverseNum.length-1);
    }
    console.log(parseInt(reverseNum,10));
    console.log(reverseNum);

    return Number(reverseNum);

}


console.log(reverseInt(-90));
console.log(reverseInt(981));

// array is mutable, but not string