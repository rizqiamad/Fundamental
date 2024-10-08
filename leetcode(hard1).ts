function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let result:number = 0
    let newNums:number[] = nums1.concat(nums2)
    newNums.sort((a, b) => a - b)
    console.log(newNums);
    if (newNums.length % 2 !== 0) result = newNums[(newNums.length-1)/2]
    else {
        let mid1:number = newNums.length / 2 - 1
        let mid2:number = newNums.length / 2
        result = (newNums[mid1] + newNums[mid2]) / 2
    }

    return result
};

let nums1:number[] = [1,2]
let nums2:number[] = [4,5]
let res = findMedianSortedArrays(nums1, nums2)
console.log(res);