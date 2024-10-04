let arr:string[] = ['a', 'A', 'B', 'b']
let arr2:number[] = new Array(1,12,65,10,23)
let arr3:number[] = new Array(1,12,65,10,23)

arr.sort();                 //defaultnya sort untuk mengurutkan huruf
arr2.sort((a,b) => a - b)   //untuk mensorting angka asc
arr3.sort((a,b) => b - a)   //untuk mensorting angka dsc
console.log(arr);
console.log(arr2);
console.log(arr3);

arr2.reverse()
console.log(arr2);          //asc di reverse