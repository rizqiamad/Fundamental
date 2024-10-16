function subsets(nums: number[]): number[][] {
    let res: number[][] = []
    res.push([])

    if (nums.length === 0) return res

    nums.forEach((item, _idx, arr) => item)

    return res
};  

console.log(subsets([1,2,3]))