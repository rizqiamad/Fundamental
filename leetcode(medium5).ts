function intToRoman(num: number): string {

  //var pembantu
  let res: string = ""; //var output
  let strNum:string = '';
  let strNumArr:string[] = []

  //kamus angka romawi
  let romanMap: {[key:number]:string} = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  strNum = num.toString() //angka diubah menjadi string dan dimasukkan ke dalam var strNum

  //angka diubah menjadi satuan dan dimasukkan ke dalam array strNumArr
  let x:number = 0
  for (let i = strNum.length - 1; i >= 0; i--) {
    strNumArr.unshift(`${strNum[i]}${'0'.repeat(x)}`)
    x++;
  }
  console.log(strNumArr);
  //mengubah setiap angka string di dalam array strNumArr sesuai dengan kamus angka romawi
  let y:number = 0
  for (const item of strNumArr) {
    if (Number(item[0]) === 0) {
      strNumArr[y] = item
    } else if(Number(item[0]) < 4 ) {
      strNumArr[y] = `${romanMap[Number(item) / Number(item[0])]}`.repeat(Number(item[0]))
    } else if(Number(item[0]) >= 4 && Number(item[0]) != 9){
      //always -1 + 5
      let zero:number = item.length - 1
      let lima:string = `5${'0'.repeat(zero)}`
      let satu:string = `1${'0'.repeat(zero)}`
      
      if (Number(item[0]) === 4) strNumArr[y] = `${romanMap[Number(satu)]}${romanMap[Number(lima)]}`
      
      else if(Number(item[0]) === 5) strNumArr[y] = `${romanMap[Number(lima)]}`
      
      else strNumArr[y] = `${romanMap[Number(lima)]}`+`${romanMap[Number(satu)]}`.repeat(Number(item[0])-5)
    }else{
      //always -1 + 10
      let zero:number = item.length

      let puluhan:string = `1${'0'.repeat(zero)}`
      let satuan:string = `1${'0'.repeat(zero-1)}`

      strNumArr[y] = `${romanMap[Number(satuan)]}${romanMap[Number(puluhan)]}`
    }
    y++
  }

  res = strNumArr.filter(item => !item.includes('0')).join('')

  return res;
}

console.log(intToRoman(1017));
