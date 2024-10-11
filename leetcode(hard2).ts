function firstMissingPositive(nums: number[]): number {
    let num:number = 1

    let setNums = new Set(nums)

    while (setNums.has(num)) {
        if (!setNums.has(num)) return num
        num++
    }

    return num

};

console.log(firstMissingPositive([43,1,2,45,7,3,4,13,5,12,6]))