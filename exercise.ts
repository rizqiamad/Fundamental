/**
 * Multiplication
 */
// let num:number = 9;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num*i}`);
// }

/**
 * Palindrome
 */
// let word:string = 'madaw';
// function reverseString(str:string) {
//     const strRev =  str.split('').reverse().join('');
//     return strRev
// }
// if (word === reverseString(word)) {
//     console.log(`${word} is palindrom`);
// }else{
//     console.log(`${word} is not palindrom`);
// }

/**
 * Centimeter to Kilometer
 */
// let cm:number = 100000
// let km:number = cm / (100*1000)
// console.log(`${cm} cm is ${km} km`);

/**
 * format number as currency
 */
// let num:number = 100000000
// let curr = num.toLocaleString()
// console.log(`Rp. ${curr},00`);

/**
 * Remove first occurance
 */
// let word:string = 'Hello world';
// let searchStr:string = 'el';
// console.log(word.replace(searchStr,''));

/**
 * Capitalize first letter of each word
 */
// let word:string = 'hello world world !';
// let arrRes:string[] = word.split('');
// for (let i = 0; i < arrRes.length; i++) {
//     if (i === 0) {
//         arrRes[i] = arrRes[i].toUpperCase()
//     }
//     if (arrRes[i] === ' ') {
//         arrRes[i+1] = arrRes[i+1].toUpperCase()
//     }
// }
// word = arrRes.join('')
// console.log(word);

/**
 * Swap the case of each character
 */
// let words:string = 'The QuiCk BrOwN Fox';
// let expectedAnswer:string = 'tHE qUIcK bRoWn fOX';
// let arr:string[] = words.split('')
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//         arr[i] = arr[i].toLowerCase()
//     }else{
//         arr[i] = arr[i].toUpperCase()
//     }
// }
// words = arr.join('')
// console.log(words);
// console.log(expectedAnswer);

/**
 * Finding the largest of 2 integer
 */
// let num1:number = 12;
// let num2:number = 12;
// if (num1 > num2) {
//     console.log(`The largest number is ${num1}`);
// }else if(num2 > num1){
//     console.log(`The largest number is ${num2}`);
// }else{
//     console.log(`Either ${num1} or ${num2} have a same value`);
// }

/**
 * Sorting 3 number
 */
// let num1:number = 24;
// let num2:number = 123;
// let num3:number = 1;
// let numArr:number[] = [];
// numArr.push(num1);
// numArr.push(num2);
// numArr.push(num3);
// console.log(numArr);
// numArr.sort((a, b) => {return a - b})
// console.log(numArr);

/**
 * Checking data type
 */
// let x = 5;
// console.log('1 for string');
// console.log('2 for number');
// console.log('3 for for other data type');
// if (typeof x === 'string') {
//     console.log(1);
// } else if(typeof x === 'number'){
//     console.log(2);
// }else{
//     console.log(3);
// }

/**
 * Change every letter a into *
 */
// let words:string = 'An apple a day keeps the doctor away'
// let expectedAnswer:string = '*n *pple * d*y keeps the doctor *w*y'
// let arrword:string[] = words.split('')
// for (let i = 0; i < arrword.length; i++) {
//     if (arrword[i] === 'a' || arrword[i] === 'A') {
//         arrword[i] = '*'
//     }
// }
// words = arrword.join('')
// console.log(words);
// console.log(expectedAnswer);

/**
 * Changing every letter with regex
 */
// const str:string = 'An apple a day keeps the doctor away';
// const res:string = str.replace(/a/g,'*');   //sensitive
// const res2:string = str.replace(/a/gi,'*'); //insensitive
// console.log(res);
// console.log(res2);

const letter:string = 'Hello@ Stu?dent Purwa4dhika';
console.log(letter);
console.log(letter.replace(/[^a-zA-Z\s]/g, ''));    //kecuali huruf a-z dan A-Z juga \s spasi
console.log(letter.replace(/[a-zA-Z\s]/g, ''));    //huruf a-z dan A-Z juga \s spasi dihapus

/**
 * For looping reverse (Palindrome)
 */
// let words:string = 'hello'
// let result:string = ''
// for (let i = words.length - 1; i >= 0; i--) {
//     result += words.charAt(i);
// }
// if (words === result) {
//     console.log('Palindrome');
// }else{
//     console.log('Not palindrome');
// }

/**
 * Sorting Tsania
 */
// let nomor1 : number = 42
// let nomor2 : number = 5
// let nomor3 : number = 18

// let all = [(nomor1), (nomor2), (nomor3)]
// console.log(all.sort((a, b) => {return a - b}).join(','))