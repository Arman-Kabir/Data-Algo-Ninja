// Two Sum 

// time complexity - O(n^2)
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length-1; i++) {
//         for (j = i+1; j < nums.length; j++) {
//             console.log(i,j);
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }
//     }
// }

// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));




function twoSum(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (j = i+1; j < nums.length; j++) {
            console.log(i,j);
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));