function longestCommonPrefix(strs: string[]): string {
    let res:string = ''
    let subRes:string = ''
    let pointer:number = 0
    let check:boolean

    if (strs.length > 1) {
        for (let i = 0; i < strs[0].length; i++) {
            subRes += strs[0][i]
            pointer = 0
            check = false
            for (const item of strs) {
                if (item === '') return res = ''
                if (item[i] === subRes[i]) pointer++
                else{
                    check = true
                    break
                }
                if (pointer === strs.length) res += item[i]
            }
            if (check) {
                break
            }
        }
    }else{
        res = strs[0]
    }

    return res
};

console.log(longestCommonPrefix(['aya','aya','']));
