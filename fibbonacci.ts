function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a: number = 0;
  let b: number = 1;
  let c: number = 0;

  for (let i = 0; i < n - 1; i++) {
    c = a + b;

    a = b;
    b = c;
  }

  return c;
}

console.log(fib(5))