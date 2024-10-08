interface Car{
    brand:string
    model:string
    price:number
}

type MyCar = {
    brand:string,
    model:string,
    price:number
}

const car:Car = {
    brand:'BMW',
    model:'M135i xDrive',
    price: 8000000
}

const myCar:MyCar = {
    brand:'Porche',
    model:'M135i xDrive',
    price: 8000000
}
// for (const key in car) {
//     console.log(car[key as keyof Car]);
// }
for (const [key, value] of Object.entries(myCar)) {
    console.log(`${key} : ${value}`);
}

console.log(Object.values(myCar));

// let arr:string[] = ['ahmad', 'hanif', 'rizqi']
// let entry = arr.entries();
// for (const item of entry) {
//     console.log(item);
// }