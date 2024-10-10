class Employee {

    #name:string = ''
    #salary:number = 0
    #workHours:number = 0
    #types:string = ''

    constructor(name:string, type:string) {
        this.#name = name
        this.#types = type
    }

    setWorkHours(workHours:number){
        this.#workHours = workHours
    }

    getSalary(){
        this.totalSalary()
        console.log(`\n==========================================`)
        console.log(`${this.#types} employee : ${this.#name}`);
        console.log(`Salary : Rp ${this.#salary.toLocaleString()}`)
        console.log(`==========================================\n`)
    }

    totalSalary(){
        let salary:number = 0
        if (this.#workHours > 6 && this.#types === 'Full-time') salary = (100000 * 6) + (75000 * (this.#workHours - 6))
        else if (this.#workHours > 6 && this.#types === 'Part-time') salary = (50000 * 6) + (30000 * (this.#workHours - 6))
        else if (this.#types === 'Full-time') salary = 100000 * this.#workHours
        else if (this.#types === 'Part-time') salary = 50000 * this.#workHours
        this.#salary = salary
    }

}

class FulltimeEmployee extends Employee {

    constructor(name:string) {
        super(name, 'Full-time')
    }

}

class ParttimeEmployee extends Employee {

    constructor(name:string) {
        super(name, 'Part-time')
    }

}

let hanif:FulltimeEmployee = new FulltimeEmployee('Hanif')
hanif.setWorkHours(10)
let ahmad:ParttimeEmployee = new ParttimeEmployee('Ahmad')
hanif.getSalary()
ahmad.getSalary()