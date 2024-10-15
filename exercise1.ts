function convertExcelColumn(str: string): number {
    if (!str.split('').every(item => item.match(/[A-Z]/))) return 0

    let res:number = 0

    let x = str.length - 1
    for (let i = 0; i < str.length; i++) {
        if (i === 0) res += 26 * i + (str.charCodeAt(x--) - 64)
        else res += 26 ** i *(str.charCodeAt(x--) - 64)
    }

    return res;
}

// Harus menggunakan huruf capital atau akan mengembalikan nilai 0
console.log(convertExcelColumn('AAA'))