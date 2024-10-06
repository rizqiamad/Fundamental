/**
 * Number Triangle
 */
// function numTriangle(height:number):void{
//     for (let i = 1; i <= height; i++) {
//         let result:string = ''
//         for (let j = 1; j <= i; j++) {
//             if (j >= 10) {
//                 result += `${j} `
//             }else{
//                 result += `0${j} `
//             }
//         }
//         console.log(result);
//     }
// }
// numTriangle(20)

/**
 * Function can loop the number of times according to the input we provide
 */
// function loopTimes(n:number) {
//     let res:string = '';
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             res += 'FizzBuff '
//         }else if (i % 3 === 0) {
//             res += 'Fizz '
//         }else if (i % 5 === 0) {
//             res += 'Buzz '
//         }else{
//             res += `${i} `
//         }
//     }
//     console.log(res);
// }
// loopTimes(16)

/**
 * Body mass index
 * BMI = weight(kg)/(height(meter))^2
 * parameters = weight & height
 */
// function bodyMassIndex(weight:number, height:number):string {
//     let res:number = weight / (height**2)
//     if (res < 18.5) {
//         return `less weight, your Body Mass Index : ${res}`
//     }else if (res >= 18.5 && res <= 24.9) {
//         return `ideal, your Body Mass Index : ${res}`
//     }else if (res >= 25 && res <= 29.9){
//         return `overweight, your Body Mass Index : ${res}`
//     }else if (res >= 30 && res <= 39.9){
//         return `very overweight, your Body Mass Index : ${res}`
//     }else if (res > 39.9){
//         return `obesity, your Body Mass Index : ${res}`
//     }else{
//         return `${res}`
//     }
// }
// let result:string = bodyMassIndex(70, 1.68)
// console.log(result);

/**
 * Remove odd number from array
 */
// function removeOddNumber(numArr:number[]) {
//     return numArr.filter(item => item % 2 === 0)
// }
// let evenArr:number[] = []
// evenArr = removeOddNumber([1,2,3,4,5,6,7,8,9,10])
// console.log(evenArr);