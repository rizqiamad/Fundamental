function firstMissingPositive(nums: number[]): number {
    let num:number = 1

    nums.sort((a, b) => a - b)

    console.log(nums);

    // while (nums.includes(num)) {
    //     if (!nums.includes(num)) return num
    //     num++
    // }

    return num

};

console.log(firstMissingPositive([43,1,2,45,7,3,4,13,5,12,6]))