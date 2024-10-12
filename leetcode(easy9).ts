function removeDuplicates(nums: number[]): number {

    let setNums = new Set(nums)

    nums.length = 0

    for (const item of setNums.values()) {
        nums.push(item)
    }

    return setNums.size
};

let nums:number[] = [0,0,1,1,1,2,2,3,3,4]; // Input array
let expectedNums:number[] = [0,1,2,3,4]; // The expected answer with correct length

let k:number = removeDuplicates(nums); // Calls your implementation

console.log(k);

console.assert(k === expectedNums.length);
for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i]);
}

// let nums:number[] = [1,1,1,1,2,3,4,0,0,0]
// let setNums = new Set(nums)

// console.log(nums);

// nums = []

// for (const item of setNums.values()) {
//     nums.push(item)
// }
// console.log(nums);