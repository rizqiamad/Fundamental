function reverse(x: number): number {
    let INT32_min = -2147483648
    let INT32_max = 2147483647

    let res:number = 0
    let subRes:string = ''
    let strNum:string = x.toString()
    let strNumArr:string[] = []

    if (x > 0) subRes = x.toString().split('').reverse().join('')
    else {
        subRes += strNum[0]
        strNumArr = strNum.split('');
        strNumArr.splice(0,1)
        subRes += strNumArr.reverse().join('')
    }
    res = Number(subRes)

    if (res > INT32_max || res < INT32_min) res = 0

    return res
};

console.log(reverse(123));
