function factorial(n:number):number {
    let newNum = n - 1;
    if (newNum <= 0) {
        return 1
    }
    return n * factorial(newNum)
}

console.log(factorial(5));