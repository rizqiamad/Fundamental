function longestPalindrome(s: string): string {
    let result:string = ''
    let newStr:string[] = []
    if (s.length > 0) {
        for (let i = 0; i < s.length; i++) {
            newStr[i] += s[i]
            for (let j = i + 1; j < s.length; j++) {
                if (s[i] === s[j]) {
                    newStr[i] += s[i]
                }
            }
        }
    }else{

    }
    return result
};

let res = longestPalindrome('babad')
console.log(res);