function pascalTriangle(n: number): number[][] {
  let res: number[][] = [];

  res.push([1]);
  for (let i = 0; i < n - 1; i++) {
    let temp: number[] = [];
    for (let j = -1; j < res.length; j++) {
      if (res[i][j] === undefined) temp.push(0 + res[i][j + 1]);
      else if (res[i][j + 1] === undefined) temp.push(res[i][j] + 0);
      else temp.push(res[i][j] + res[i][j + 1]);
    }
    res.push(temp);
  }

  return res;
}

console.log(pascalTriangle(6))
