function longestCommonPrefix(strs: string[]): string {
    let res:string = ''
    
    for (let i = 0; i < strs[0].length; i++) {
        res += strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            console.log(strs[j].includes(res) && strs[j][0] );
            if (!strs[j].includes(res)){
                res = res.substring(0, res.length - 1)
                return res
            }
        }
    }

    return res
};

console.log(longestCommonPrefix(['dog','god','good']));