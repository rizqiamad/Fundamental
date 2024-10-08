function lengthOfLongestSubstring(s: string): number {
    let result:number = 0
    let newStr:string = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < newStr.length; j++) {
            if (s[i] === newStr[j]) continue
            if (j === newStr.length - 1) newStr += s[i]
        }
    }
    return result
};

lengthOfLongestSubstring('awokawok')