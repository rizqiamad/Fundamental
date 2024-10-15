function findTheOneAndOnly(arr: number[]): number | undefined {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 2) {
    if (!(arr[i] === arr[i + 1])) return arr[i];
  }

  return;
}

console.log(findTheOneAndOnly([1]));
