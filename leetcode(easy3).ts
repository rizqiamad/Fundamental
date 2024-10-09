function romanToInt(s: string): number {
    // varibel output
    let res:number = 0

    // converting entering string to array
    let sArr:string[] = s.split('')

    // numArr varible for each value
    let numArr:number[] = []

    let romanMap: Record<string, any> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < sArr.length; i++) {
        numArr.push(romanMap[sArr[i]])
    }

    console.log(numArr);
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < numArr[i+1]) {
            res -= numArr[i]
        }else{
            res += numArr[i]
        }
    }
    return res
};

console.log(romanToInt('CMMXL'));