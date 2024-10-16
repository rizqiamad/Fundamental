function majority(nums: number[]): number {
  return nums.filter(
    (item, _idx, arr) => arr.filter((val) => val === item).length > arr.length / 2
  )[0];
}

console.log(majority([1,4,4,4,3]))