function removeElement(nums: number[], val: number): number {
  let regEx = new RegExp(val.toString(), "g");
  nums = nums
    .join("")
    .replace(regEx, "")
    .split("")
    .map((item) => Number(item));
  return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
