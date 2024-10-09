function switchKeyValue(a:Record<string,any>[]):void {
    for (let obj of a) {
        let newObj:Record<string,any> = obj
        for (const [key,value] of Object.entries(newObj)) {
            newObj[`${value}`] = key
            delete newObj[`${key}`]
        }
    }
    console.log(a);
}

switchKeyValue([{name:'hanif',age:19},{produk:'book',total:19}])