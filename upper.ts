/*
    input = 'Hello Purwadhika'
    output = [13,2]

    input = 'B4ndung'
    output = [5, 1]
*/

function checkLowerUpper(input: string): number[] {
  let res: number[] = [0, 0];
  input.split("").forEach((item) => {
    if (item.match(/[^a-zA-Z]/)) item;
    else if (item === item.toLowerCase()) res[0]++;
    else res[1]++;
  });
  return res;
}

console.log(checkLowerUpper("Hello Purwadhika"));
console.log(checkLowerUpper("B4ndung"));
