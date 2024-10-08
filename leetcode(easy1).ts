/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
// function twoSum(nums: number[], target: number): number[] {
//     let result:number[] = []
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 result.push(i)
//                 result.push(j)
//             }
//         }
//     }
//     return result
// };
// let nums:number[] = [2,7,11,15]
// let target:number = 9
// let res:number[] = twoSum(nums, target)
// console.log(res)

let num:number = 1000000000000000000000000000001
let num2:number = 564
let res = num - num2
console.log(res.toLocaleString('fullwide', {useGrouping: false}));