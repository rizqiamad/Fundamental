/**
 * lowest, highest, average(with sort function)
 */
// let arr:number[] = [1,54,3,65,7,1,10,1,6];
// function aritmathicWithSort(arr:number[]) {
//     let lowest:number;
//     let highest:number;
//     let average:number;
//     arr.sort((a, b) => a - b); //sorting asc
//     lowest = arr[0] //get the lowest value a.k.a first index value
//     highest = arr[arr.length - 1] //get the highest value a.k.a last index value
//     average = arr.reduce((a, b) => a + b) / arr.length
//     console.log(`lowest : ${lowest}, highest : ${highest}, average : ${average}`);
// }
// aritmathicWithSort(arr)

/**
 * lowest, highest, average(without sort function)
 */
//    let arr:number[] = [1,54,3,65,7,1,10,1,6];
// function aritmathicWithoutSort(arr:number[]) {
//     let lowest:number;
//     let highest:number;
//     let average:number;
//     lowest = arr.reduce((a, b) => {
//         if (a < b) {
//             return a
//         }else{
//             return b
//         }
//     });
//     highest = arr.reduce((a, b) => {
//         if (a > b) {
//             return a
//         }else{
//             return b
//         }
//     });
//     average = arr.reduce((a, b) => a + b) / arr.length
//     console.log(`lowest : ${lowest}, highest : ${highest}, average : ${average}`);
// }
// aritmathicWithoutSort(arr)

/**
 * concatinating array of words
 */
// let arr:string[] = ['apple', 'sandwich', 'kebab', 'rice', 'banana']
// function concatination(arr:string[]) {
//     console.log(arr);
//     arr[arr.length - 1] = ' and ' + arr[arr.length - 1]
//     console.log(arr);
//     let res = arr.join(',')
//     console.log(res);
// }
// concatination(arr)

/**
 * second smallest number
 */
// function getSecondSmallest(arr:number[]) {
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[0] < arr[1]) {
//             return arr[1]
//         }else if(arr[i] < arr[i + 1]){
//             return arr[i + 1]
//         }
//     }
// }
// let res = getSecondSmallest(arr)
// console.log(res);

/**
 * calculate two arrays
 * with requirement, both arrays have same length
 */
// let arr1:number[] = [3,5,3,10]
// let arr2:number[] = [1,2,3,10]
// function calculateArray(arr1:number[], arr2:number[]) {
//     console.log(arr1);
//     console.log(arr2);
//     let result:number[] = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let x = arr1[i] + arr2[i];
//         result.push(x)
//     }
//     console.log(result);
// }
// calculateArray(arr1, arr2)

/**
 * calculate two arrays
 * with requirement, both arrays have same length
 */
// let arr:number[] = [1,2,3];
// function addArrElement(arr:number[], num:number) {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             console.log(`Number ${num} has been in before`);
//             console.log(arr);
//             return
//         }
//     }
//     arr.push(num)
//     console.log(arr);
// }
// addArrElement(arr, 5)
// addArrElement(arr, 6)
// addArrElement(arr, 1)

/**
 * summing all of number in mixed data type array
 */
// let arr:any[] = [null, 2, '12', 4, '5', '10', {'nama':'Hanif'}]
// function summingNum(arr:any[]) {
//     let res:number = 0;
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === 'number'){
//             res += arr[i]
//         }
//     }
//     console.log(res);
// }
// summingNum(arr)

/**
 * limited array with given integer
 */
// let maxSize:number = 2
// function getArray(maxSize:number, ...res:number[]) {
//     console.log(maxSize);
//     let result:number[] = []
//     for (let i = 0; i < maxSize; i++) {
//         result.push(res[i])
//     }
//     return result
// }
// let result = getArray(maxSize, 12,1,2,3,4,5,6)
// console.log(result);

/**
 * combine 2 given array
 */
// let arr1: number[] = [1, 2, 3];
// let arr2: number[] = [4, 5, 6];
// function combineTwoArr(arr1:number[], arr2:number[]) {
//     let result = arr1.concat(arr2)
//     return result
// }
// let res = combineTwoArr(arr1, arr2);
// console.log(res);

/**
 * find duplicate values in array
 */
// let arr: number[] = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5];
// function findDuplicate(arr: number[]) {
//   let result: number[] = [];
//   console.log(arr);
//   result.push(arr[0]);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) continue;
//       if (j === result.length - 1) result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let result = findDuplicate(arr);
// console.log(result);

/**
 * find the difference between 2 arrays
 */
// let arr1: number[] = [1, 2, 3, 12, 3];
// let arr2: number[] = [4, 5, 6, 1, 2, 3];
// function diffValueArr(arr1: number[], arr2: number[]) {
//   let result: number[] = [];
//   arr1.map(item => {
//     for (let i = 0; i < arr2.length; i++) {
//         if (item === arr2[i]) return
//         if (i === arr2.length - 1) result.push(item)
//     }
//   });
//   arr2.map(item => {
//     for (let j = 0; j < arr1.length; j++) {
//         if (item === arr1[j]) return
//         if (j === arr1.length - 1) result.push(item)
//     }
//   });
//   return result
// }
// let res = diffValueArr(arr1, arr2);
// console.log(res);

/**
 * primitive type of data
 */
// let arr:any[] = ['string', 1, {}, [], undefined, true]
// function getPrimitive(arr:any[]) {
//     let result:any[] = []
//     result = arr.filter(item => {
//         return typeof item === 'number' || typeof item === 'string' || typeof item === 'undefined' || typeof item === 'boolean'
//     })
//     return result
// }
// let res = getPrimitive(arr)
// console.log(res);

/**
 * summing duplicate values
 */
// let arr:number[] = [10,20,10,30,40,10,10,50,10,60]
// function sumDuplicate(arr:number[]) {
//     arr.sort((a, b) => a - b)
//     let num:number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             num += arr[i]
//         }
//     }
//     return num
// }
// let res = sumDuplicate(arr)
// console.log(res);

/**
 * rock, paper, scissor game
 */
function playGame(player:string) {
    let random:number = Math.floor(Math.random()*10)
    player = player.toLowerCase()
    let com:string = ''
    let score:string = ''
    if (random > 0 && random < 4) {
        com = 'rock'
    }else if (random >= 4 && random < 7) {
        com = 'paper'
    }else if (random >= 7 && random < 10){
        com = 'scissor'
    }
    if (player === com) score = 'draw'
    else if (player === 'rock' && com === 'paper') score = 'you lose'
    else if (player === 'rock' && com === 'scissor') score = 'you win'
    else if (player === 'paper' && com === 'rock') score = 'you win'
    else if (player === 'paper' && com === 'scissor') score = 'you lose'
    else if (player === 'scissor' && com === 'rock') score = 'you lose'
    else if (player === 'scissor' && com === 'paper') score = 'you win'

    console.log(`You ${player}, computer ${com}`);
    return score
}
let hasil = playGame('rock')
console.log(hasil);