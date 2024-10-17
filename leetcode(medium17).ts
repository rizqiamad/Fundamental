function maxArea(height: number[]): number {
  let max: number = 0;
  let length: number = 0;
  let heighest: number;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      heighest = height[i];
      length = j - i;
      if (height[j] <= height[i]) {
        heighest = height[j];
      }
      if (heighest * length > max) {
        max = heighest * length;
      }
    }
  }

  return max;
}

console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
