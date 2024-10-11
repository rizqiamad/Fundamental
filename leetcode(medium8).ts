function divide(dividend: number, divisor: number): number {
    let INT32_min = -2147483648
    let INT32_max = 2147483647

    let resDivision = dividend / divisor

    if (resDivision > INT32_max) return INT32_max
    if (resDivision < INT32_min) return INT32_min
    if(dividend % divisor === 0) return resDivision
    if (resDivision < 0) return Math.ceil(resDivision)
    if (resDivision > 0) return Math.floor(resDivision)
    
    return resDivision
};

console.log(divide(10,3));