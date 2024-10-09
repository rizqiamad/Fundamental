function getIntersectionObj(a:Object, b:Object){
    let newObj:{[key:string]:Object} = {}
    for (const [keyA, valueA] of Object.entries(a)) {
        for (const [keyB, valueB] of Object.entries(b)) {
            if (keyA === keyB && valueA === valueB) {
                newObj[`${keyA}`] = valueA
            }
        }
    }
    return newObj
}

let res = getIntersectionObj({a:1,b:2},{a:1,b:5});
console.log(res);
