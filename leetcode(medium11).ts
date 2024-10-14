function search(nums: number[], target: number): number {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2],10))