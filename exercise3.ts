interface StudentData {
    name:string
    email:string
}

function mergeArrStudentData(a:StudentData[], b:StudentData[]):StudentData[] {
    let result:StudentData[] = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (JSON.stringify(a[i]) === JSON.stringify(b[j])){
                result.push(a[i])
                break
            }
            if (j === b.length - 1) result.push(a[i])
        }
    }
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (JSON.stringify(b[i]) === JSON.stringify(a[j])) break
            if (j === a.length - 1) result.push(b[i])
        }
    }
    return result
}

let a:StudentData[] = [{name:'student1',email:'student1@mail.com'}, {name:'student2',email:'student2@mail.com'}, {name:'student3',email:'student3@mail.com'}]
let b:StudentData[] = [{name:'student2',email:'student2@mail.com'}, {name:'student3',email:'student3@mail.com'}]
let res:StudentData[] = mergeArrStudentData(a,b)
console.log(res);