/*
    input = '123456789'
    output = '(123)-456-789'
    
    input = '987654321'
    output = '(987)-654-321'
*/

// function formattingNumber(num:number) {
//     let res:string = ''

//     res += '('
//     for (let i = 0; i < num.toString().length; i++) {
//         if (i === 3) res += ')'
//         if (i % 3 === 0 && i !== 0) res += '-'
//         res += num.toString()[i]
//     }

//     return res
// }

// console.log(formattingNumber(123456789));

function phoneFormat(phoneNumber : number) {
    return phoneNumber.toString().replace(/(\d{3})(\d{3})(\d{3})/, "($1)-$2-$3");
};

console.log(phoneFormat(123456789))