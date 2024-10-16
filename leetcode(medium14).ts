function searchRange(nums: number[], target: number): number[] {
  if (!nums.includes(target)) return [-1, -1];

  let res: number[] = [];

  const firstIndex = nums.findIndex((item) => item === target);

  res.push(firstIndex);
  for (let i = firstIndex; i <= nums.length; i++) {
    if (nums[i] !== nums[firstIndex]) {
      res.push(i - 1);
      break;
    }
  }

  return res;
}

console.log(searchRange([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 5));
