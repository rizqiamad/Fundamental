class Person{
    #firstName:string = '';
    #lastName:string = '';
    age:number = 0;

    constructor(first:string, last:string){
        this.#firstName = first;
        this.#lastName = last;
    }

    getName(){
        console.log(`${this.#firstName} ${this.#lastName}`);
    }
}

let hanif:Person = new Person('Hanif', 'Ahmad');
hanif.getName();
console.log(hanif.age);
