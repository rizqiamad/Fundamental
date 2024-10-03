/**
 * Odd even number
 */
// let num:number = 5;
// if (num % 2 === 0) {
//     console.log('even number');
// }else{
//     console.log('odd number');
// }

/**
 * Prime number
 */
// let num: number = 198;
// function primeChecker(num:number) {
//     if (num <= 1) return false
//     if (num === 3 || num === 5 || num === 7) return true
//     if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) return false
//     return true
// }
// let result = primeChecker(num)
// if (result) {
//     console.log('Is a prime number');
// }else{
//     console.log('Is not prime number');
// }

/**
 * Sum of the numbers
 */
// let num:number = 5;
// let x:number = 0;
// for (let i = 1; i <= num; i++) {
//     x += i;
// }
// console.log(x);

/**
 * Factorial
 */
// let factor:number = 5;
// let x = factor
// // let result:number = 1;
// function Factorial(num:number){
//     console.log(x);
//     if (num === 0) {
//         return num;
//     }
//     x--
//     num *= x
//     Factorial(num)
// }

// console.log(Factorial(factor))

// for (let i = factor; i > 0; i--) {
//     result *= i;
// }
// console.log(result);

/**
 * Fibonacci
 */

// let a:number = 0
// let b:number = 1
// let c:number
// let nFibonacci:number = 15

// for (let i = 1; i < nFibonacci; i++) {
//     c = a + b
//     a = b
//     b = c
//     console.log(c);
// }

/**
 * Bintang
 */

// let num:number = 10
// for (let i = 1; i <= num; i++) {
//     let star:string = ''
//     for (let x = 0; x < i; x++) {
//         star += '*'
//     }
//     console.log(star);
// }

let num:number = 20
let space:number = num;
for (let i = 0; i < num; i++) {
    let star:string = ''
    space--
    for (let j = 0; j < num; j++) {
        if (j >= space) {
            star += '*'
        }
        star += ' '
    }
    console.log(star);
}

// let num:number = 10
// let space:number = num;
// for (let i = 0; i < num; i++) {
//     let star:string = ''
//     space--
//     for (let j = 0; j < num; j++) {
//         if (j >= space) {
//             star += '*'
//         }else{
//             star += ' '
//         }
//     }
//     console.log(star);
// }
