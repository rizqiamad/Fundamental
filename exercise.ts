/**
 * exercise 1
 */
// interface Result{
//     score: {
//         highest:number,
//         lowest:number,
//         average:number
//     }
//     age: {
//         highest:number,
//         lowest:number,
//         average:number
//     }
// }

// class Student{
//     #name:string = '';
//     #dob:string = '';
//     #email:string = '';
//     #score:number = 0;

//     constructor(name:string, dob:string, email:string, score:number){
//         this.#name = name;
//         this.#dob = dob;
//         this.#email = email;
//         this.#score = score;
//     }

//     getAge(){
//         let dob:number = new Date(this.#dob).getTime();
//         let now:number = new Date().getTime();
//         let age:number = (now - dob) / (1000*60*60*24*365);
//         return Number(age.toFixed(2));
//     }

//     getScore(){
//         return this.#score;
//     }
// }

// function calculateArrOfStudent(studentData:Student[]) {
//     let result:Result = {score:{highest:0,average:0,lowest:0}, age:{highest:0,average:0,lowest:0}};

//     //Score
//     let sumScore:number = 0
//     studentData.sort((a, b) => a.getScore() - b.getScore())
//     result.score.lowest = studentData[0].getScore()
//     result.score.highest = studentData[studentData.length - 1].getScore()
//     for (let i = 0; i < studentData.length; i++) {
//         sumScore += studentData[i].getScore()
//     }
//     result.age.average  = sumScore / studentData.length
    
//     //age
//     let sumAge:number = 0
//     studentData.sort((a, b) => a.getAge() - b.getAge())
//     result.age.lowest = studentData[0].getAge()
//     result.age.highest = studentData[studentData.length - 1].getAge()
//     for (let i = 0; i < studentData.length; i++) {
//         sumAge += studentData[i].getAge()
//     }
//     result.age.average  = sumAge / studentData.length

//     return result
// }

// const hanif = new Student('Hanif', '2005-08-15', 'ahmadhanif759@gmail.com', 80);
// const jelang = new Student('Jelang', '2005-01-20', 'ahmadhanif759@gmail.com', 90);
// const krisna = new Student('Krisna', '2005-05-11', 'ahmadhanif759@gmail.com', 100);

// console.log(calculateArrOfStudent([hanif,jelang,krisna]));
