function intToRoman(num: number): string {
  let res: string = "";
  let romanMap: Record<string, any> = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  if (1 <= num && num <= 3999) {
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
      if (strNum.length === 4 && i === 0) {

      }
    }
    console.log(strNum);
  }

  return res;
}

console.log(intToRoman(123));
