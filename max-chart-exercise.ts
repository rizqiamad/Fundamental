/*
    input :
        str = 'Purwadhika Bandung'
        n = 10
    
    output : 'Purwadhika...
*/

function limitText(str:string, n:number) {
    let res:string = ''
    for (let i = 0; i < n; i++) {
        res += str[i]
    }
    res += '...'
    return res
}

console.log(limitText('Purwadhika Bandung', 5));