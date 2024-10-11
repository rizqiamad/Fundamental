function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) return nums.findIndex(item => item === target)
    if (nums.every(item => target > item)) return nums.length
    return nums.findIndex(item => item > target)
};

console.log(searchInsert([1,2,3,4,5], 5))