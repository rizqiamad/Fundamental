function subsets(nums: number[]): number[][] {
    let res: number[][] = []
    let x: number = 0

    for (let i = 0; i < nums.length; i++) {
        res[x].push(nums[i])
        ++x
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                
            }
        }
    }

    return []
};

console.log(subsets([1,2,3,4]))
