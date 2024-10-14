function check(num:number[]):boolean{
    if (num.length >= 5) {
        
        return true
    }
    if (num.length >= 3){
        
        return false
    }
    return false
}

let num:number[] = [1,2,3,4]
console.log(check(num))