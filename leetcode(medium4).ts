function longestPalindrome(s: string): string {
    let result:string = ''
    let newStr:string[] = []
    let subRes:string[] = []
    if (s.length > 0) {
        for (let i = 0; i < s.length; i++) {
            newStr[i] = s[i]
            for (let j = i + 1; j < s.length; j++) {
                if (s[i] === s[j] && s[i] === s[i + 1]) {
                    newStr[i] += s[j]
                }else if (s[i] !== s[i + 1]) {
                    newStr[i] += s[j]
                    if (s[i] === s[j]) break
                    if (i === s.length - 1) break
                }else break
            }
        }
    }
    console.log(newStr);
    if (newStr.length > 0) {
        for (const item of newStr) {
            if (item === item.split('').reverse().join('')) {
                subRes.push(item)
            }
        }
    }
    subRes.sort((a, b) => a.length - b.length)
    console.log(subRes);
    result = subRes[subRes.length - 1]
    return result
};

let res = longestPalindrome("xaabacxcabaaxcabaax")
console.log(res);