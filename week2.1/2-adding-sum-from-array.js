// Adding sum from an array
// You have been provided an array of number,You have to sum the numbers
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
        // console.log(sum,num); 
    }
    return sum;
    // for(let i = 0; i<arr.length;i++){
    //     count += arr[i]; 
    // }
    // return count;
}
console.log(sum([10, 15, 30, 5]));



// PROBLEM : Finding out max or min sum
// You have been provided an array of number,You have to find the minimum number

function min(arr) {
    // let min_num = arr[0];

    // for(let num of arr){
    //     if(num<min_num){
    //         min_num = num;
    //     }
    // }
    // console.log(min_num);
    // return min_num;

    // spread operator; To convert an array to a comma separated value. 
    console.log(Math.min(...arr));
}

console.log(min([3, 1, 10, 12, -6, 0]));



// PROBLEM : Finding out max or min sum
// You have been provided an array of number,You have to find the maximum number

function max(arr) {
    let max_num = arr[0];

    for (let num of arr) {
        if (num > max_num) {
            max_num = num;
        }
    }
    console.log(max_num);
    return max_num;

    // spread operator; To convert an array to a comma separated value. 
    // console.log(Math.min(...arr));
}

console.log(max([3, 1, 10, 12, -6, 0]));
