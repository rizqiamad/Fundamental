//1 2 3 4 5  6 7  8  9
//1 2 3 5 8 13 21 34 55 89
//1 1 2 3 5 8  13 21 34
function climbStairs(n: number): number {
  if (n === 1) return n;
  if (n === 2) return n;

  let res: number = 0;

  let a: number = 0;
  let b: number = 1;
  let c: number = 0;
  for (let i = 0; i < n - 2; i++) {
    c = a + b;
    res += c;

    a = b;
    b = c;
  }

  return res + 2;
}

console.log(climbStairs(5));
