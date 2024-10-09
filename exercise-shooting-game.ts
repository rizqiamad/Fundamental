class Player {
    #name = ''
    #health = 0
    #power = 0

    constructor(name:string, health:number = 100, power:number = 10) {
        this.#name = name
        this.#health = health
        this.#power = power
    }

    hit(power:number){

    }

    useItem(item:number){
        if (item === 0) this.#power += 10
        else this.#health += 10 
    }

    showStatus(){
        console.log(`${this.#name}(Health:${this.#health}, Power:${this.#power})`);
    }
}

class ShootingGame{
    constructor(p1:Player, p2:Player) {

    }

    getRandomItem(){
        let random = Math.floor(Math.random()*10)
        if (random < 5) return 0
        else return 1
    }

    start(){
        
    }
}