function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  let res: number[];
  result.push([]);

  if (nums.length === 0) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    res = [];
    res.push(nums[i]);
    result.push([...res]);
    for (let j = i + 1; j < nums.length; j++) {
      res.push(nums[j]);
      if (res.length >= 3) {
        result.push([res[0], res[res.length - 1]]);
        if (res.length > 3) {
          let temp = res.slice(1, res.length - 1);
          for (let k = 0; k < temp.length; k++) {
            result.push([res[0], temp[k], res[res.length - 1]]);
          }
        }
      }
      result.push([...res]);
    }
  }

  return result;
}

console.log(subsets([1, 2, 3, 4]));
