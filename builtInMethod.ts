let arr:number[] = [10,20,30,40,50];

let newArr:number[] = arr.map((item, index) =>  item += 5)
let newArr2:number[] = arr.filter((item) =>  item > 20)

console.log(newArr);
console.log(newArr2);