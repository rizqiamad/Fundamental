function numWaterBottles(numBottles: number, numExchange: number): number {
  let res: number = 0;
  let remain: number = 0;

  while (numBottles >= numExchange) {
    if (remain > 0) res += (numBottles - remain)
    else res += numBottles;
    remain = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    numBottles += remain
  }

  res += numBottles - remain

  return res;
}

console.log(numWaterBottles(15, 4));

// let arr = 'abcdefghij'.split('')

// arr.copyWithin(2,1)

// console.log(arr)
