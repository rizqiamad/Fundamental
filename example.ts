// function greatings(name:string) {
//     return `Hallo ${name}, great to see you`;
// }

// const name:string = greatings('Bambang');

// console.log(name);

// class Person {
//     private name:string;
//     private age:number;

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }

//     getPerson(){
//         console.log(`My name ${this.name}, i'm ${this.age} years old`);
//     }
// }

// const ahmad = new Person('Ahmad', 19);

// ahmad.getPerson();

// let num:number = 12.4

// console.log(Math.floor(num));   //pembulatan kebawah
// console.log(Math.ceil(num));    //pembulatan keatas
// console.log(Math.round(num));   //pembulatan

// let name:any = 'Hanif'
// console.log(name);
// name = 19;
// console.log(name);

// const names: string[] = [];
// names.push('Hanif');
// names.push('Ahmad');
// names.push('Rizqi');

// names.forEach(name => console.log(name))
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

type bool = boolean
type str = string
type num = number

interface User{
    type: bool,
    name: str,
    age: num
}

let ahmad:User = {type:true, name:'Ahmad', age:19}

console.log(ahmad);