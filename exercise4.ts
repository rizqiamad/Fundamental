function maximumProfit(input: number[]) {
  //deklarasi semua varibel bantu
  let res: number[][] = [];
  let result: number[] = [];
  const srt = (input: number[]) => input.sort((a, b) => a - b);

  input.forEach((item, _idx, arr) => {
    res.push(arr.map((val) => item - val));
  });

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res[i].length; j++) {
      result.push(res[i][j]);
    }
  }

  if (srt(result).every((item) => item > 0)) return 0;
  return -srt(result)[0];
}

console.log(maximumProfit([7,1,4,3,2]));
