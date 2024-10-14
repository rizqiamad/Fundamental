/*
    input = [1,2,3,4,5,6]
    output = [6,1,5,2,4,3]

    input.length % 2 === 0
*/

function sorting(input: number[]): number[] {
  let res: number[] = [];

  let left = 0;
  let right = input.length - 1;

  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length / 2; i++) {
    res.push(input[right - i]);
    res.push(input[left + i]);
  }

  return res;
}

console.log(sorting([1, 2, 3, 4, 5, 6]));
console.log(sorting([11, 21, 22, 5, 30, 14]));
