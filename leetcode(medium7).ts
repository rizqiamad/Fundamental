function letterCombinations(digits: string): string[] {
    const letterNumMap:{[key:number]:string} = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz',
    }

    if (digits.includes('1')) return []
    if (digits.length === 1) return letterNumMap[Number(digits)].split('')

    else if(digits.length === 2){
        let digitsArr:string[] = []
        for (let i = 0; i < letterNumMap[Number(digits.split('')[0])].length; i++) {
            for (let j = 0; j < letterNumMap[Number(digits.split('')[1])].length; j++) {
                digitsArr.push(letterNumMap[Number(digits.split('')[0])][i] + letterNumMap[Number(digits.split('')[1])][j])
            }
        }
        return digitsArr
    }

    else if(digits.length === 3){
        let digitsArr:string[] = []
        for (let i = 0; i < letterNumMap[Number(digits.split('')[0])].length; i++) {
            for (let j = 0; j < letterNumMap[Number(digits.split('')[1])].length; j++) {
                for (let k = 0; k < letterNumMap[Number(digits.split('')[2])].length; k++) {
                    digitsArr.push(letterNumMap[Number(digits.split('')[0])][i] + letterNumMap[Number(digits.split('')[1])][j] + letterNumMap[Number(digits.split('')[2])][k])
                }
            }
        }
        return digitsArr
    }

    else if(digits.length === 4){
        let digitsArr:string[] = []
        for (let i = 0; i < letterNumMap[Number(digits.split('')[0])].length; i++) {
            for (let j = 0; j < letterNumMap[Number(digits.split('')[1])].length; j++) {
                for (let k = 0; k < letterNumMap[Number(digits.split('')[2])].length; k++) {
                    for (let l = 0; l < letterNumMap[Number(digits.split('')[3])].length; l++) {
                        digitsArr.push(letterNumMap[Number(digits.split('')[0])][i] + letterNumMap[Number(digits.split('')[1])][j] + letterNumMap[Number(digits.split('')[2])][k] + letterNumMap[Number(digits.split('')[3])][l])
                    }
                }
            }
        }
        return digitsArr
    }

    return []
};

console.log(letterCombinations('234'));