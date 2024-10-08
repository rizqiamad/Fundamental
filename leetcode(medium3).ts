function myAtoi(s: string): number {
    let INT32_min = -2147483648
    let INT32_max = 2147483647
    let result: number = 0;
    s = s.trim()
    let str: string = ''
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && (s[i] === '-' || s[i] === '+')) {
            str += s[i]
        } else if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            str += s[i]
            console.log(str);
        } else if (isNaN(Number(s[i])) || s[i] === ' ') {
            if (str === '+' || str === '-') str = ''
            result = Number(str)
            if (result > INT32_max) result = INT32_max
            if (result < INT32_min) result = INT32_min
            return result
        }
    }
    if (str === '+' || str === '-') str = ''
    result = Number(str)
    if (result > INT32_max) result = INT32_max
    if (result < INT32_min) result = INT32_min
    return result
};

let res: number = myAtoi("1337c0d3")
console.log(res);

console.log(Number('37c0d3'));