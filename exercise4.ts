function maximumProfit(input: number[]) {
  //deklarasi semua varibel bantu
  let res: number[][] = [];
  let result: number[] = [];

  input.forEach((item, _idx, arr) => {
    res.push(arr.map((val) => item - val));
  });

  console.log(res)

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res[i].length; j++) {
      result.push(res[i][j]);
    }
  }

  console.log(result)

  if (result.every((item) => item >= 0)) return 0;
  return -result.sort((a, b) => a - b)[0];
}

console.log(maximumProfit([4,6,1,3,4]));
