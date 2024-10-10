function intToRoman(num: number): string {

  let res: string = "";
  let strNum:string = '';
  let strNumArr:string[] = []

  let romanMap: {[key:number]:string} = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  strNum = num.toString()
  let x:number = 0
  for (let i = strNum.length - 1; i >= 0; i--) {
    strNumArr.unshift(`${strNum[i]}${'0'.repeat(x)}`)
    x++;
  }
  
  let y:number = 0
  for (const item of strNumArr) {
    if (Number(item) === 0) break
    if (Number(item[0]) < 4 ) {
      strNumArr[y] = `${romanMap[Number(item) / Number(item[0])]}`.repeat(Number(item[0]))
    }else if(Number(item[0]) === 4){
      //always 5 - 1
    }
    y++
  }

  console.log(strNumArr);

  return res;
}

console.log(intToRoman(234));
