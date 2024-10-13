function removeElement(nums: number[], val: number): number {
  let newNums: number[] = [];

  newNums = nums.filter(item => item !== val)

  nums.length = 0

  newNums.forEach(item => nums.push(item))
  return nums.length;
}

console.log(removeElement([0, 1, 2, 21, 3, 0, 4, 2], 2));
