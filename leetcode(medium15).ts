function multiply(num1: string, num2: string): string {
    return `${BigInt(num1) * BigInt(num2)}`
};

console.log(multiply('123','123'))
