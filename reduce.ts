function myFunc(input:number[]) {
    return input.reduce((a, b) => a + b)
}

console.log(myFunc([1,2,3,4,5]))