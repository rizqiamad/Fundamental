/**
 * Recursive factorial number
 */
// function factorial(num:number):number {
//     if (num === 1) {
//         return 1
//     }
//     return num * factorial(num-1);
// }
// let hasil:number = factorial(2);
// console.log(hasil);

// function Hello(callBack: Function) {
//     callBack('Hello world')
// }
// function callBack(str:string) {
//     console.log(str);
// }
// function reverse(str:string) {
//     console.log((str.split('').reverse().join('')));
// }
// Hello(callBack)
// Hello(reverse)

// let arr:number[] = [1,2,3,4,5]
// console.log(...arr);

// const resParam = function(res:number[]) {
//     return res.reduce((a, b) => a + b)
// }

// console.log(resParam([1,2,3,4,5,10]));

/**
 * closure function
 */
// function greeting(name:string) {
//     const defaultMsg:string = 'Hello'
//     return function(){
//         return `${defaultMsg} ${name}`
//     }
// }
// let greet:Function = greeting('Hanif')
// console.log(greet());

// function multiplier(num1:number) {
//     return function (num2:number) {
//         return num1 * num2
//     };
// }
// let mul5 = multiplier(5)
// console.log(mul5(3));
// console.log(mul5(5));
// console.log(mul5(4));

