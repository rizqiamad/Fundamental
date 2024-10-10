/*
    input : 'Purwadhika'
    output : '4'

    mencari huruf vokal yang ada di dalam suatu kata
*/

function searchAmountOfVowel(str:string):number {

    return str.split('').filter(item => 'aiueoAIUEO'.includes(item)).length

}

console.log(searchAmountOfVowel('Bandung'))