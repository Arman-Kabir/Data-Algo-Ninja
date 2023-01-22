// 35. Search Insert Position

var searchInsert = function(nums, target) {
    let low = 0;
    let hi = nums.length - 1;
    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2);
        let midVal = nums[mid];
        if (midVal === target) return mid;
        if (target > midVal) {
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return low;
};