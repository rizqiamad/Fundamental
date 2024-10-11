function plusOne(digits: number[]): number[] {
    let num:bigint = BigInt(digits.join(''))
    num++
    return num.toString().split('').map(item => Number(item))
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])