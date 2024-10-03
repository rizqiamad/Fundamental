
/*
Latihan 1
*/
// let rectangleLength: number = 5;
// let rectangleWidth: number = 3;

// const rectangleArea: number = rectangleLength * rectangleWidth;
// console.log(rectangleArea);

/*
Latihan 2
*/
// const rectanglePerimeter = 2*rectangleLength + 2*rectangleWidth;
// console.log(rectanglePerimeter);

/*
Latihan 3
*/
// let radius: number = 5

// const diameter: number = 2*radius;
// const circumference: number = Math.PI*diameter;
// const area: number = Math.PI*radius**2

// console.log(`Diameter : ${diameter}`);
// console.log(`Circumference : ${circumference.toFixed(4)}`);
// console.log(`Area : ${area.toFixed(3)}`);

/*
Latihan 4
*/
// let angleA = 80;
// let angleB = 65;

// const thirdAngle = 180 - angleA - angleB;
// console.log(thirdAngle);

/*
Latihan 5
*/
// let days: number = 400;

// let year: number = Math.floor(days/365)
// days %= 365
// let month: number = Math.floor(days/30)
// days %= 30
// let day: number = Math.floor(days)

// console.log(year, month, day);

/**
 * Latihan 6
 */
let date1: Date = new Date("2022-1-20");
let date2: Date = new Date("2022-1-24");

let timeDate1: number = date1.getTime()
let timeDate2: number = date2.getTime()

let difference: number = timeDate2 - timeDate1;
difference /= 1000*60*60*24

console.log(difference);
