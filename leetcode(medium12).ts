function combinationSum(candidates: number[], target: number): number[][] {
    if (candidates.every(item => item > target)) return []

    let res:number[][] = []

    candidates.sort((a, b) => a - b)

    let x = 0
    for (let item of candidates) {
        if (item === target) res[x].push(item)
        if (item > target) break

        if (target % item === 0){
            let total:number = 0
            while (!(total === target)) {
                total += item
                res[x].push(item)
            }
        }

        if (target % item !== 0) {
            let remain = target % item
            if (!candidates.includes(remain)) break
        }
    }

    return []
};

console.log(combinationSum([],1));