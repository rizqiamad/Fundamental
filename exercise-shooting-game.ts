class Player {
    #name = ''
    #health = 100
    #power = 10

    constructor(name:string) {
        this.#name = name
    }

    damage(power:number){
        this.#health = this.#health - power
    }

    useItem(item:number){
        if (item === 0) this.#power += 10
        else this.#health += 10 
    }

    showStatus(){
        console.log(`${this.#name}(Health:${this.#health}, Power:${this.#power})`);
    }

    getHealth(){
        return this.#health
    }

    getPower(){
        return this.#power
    }

    getName(){
        return this.#name
    }
}

class ShootingGame{
    #P1:Player
    #P2:Player

    constructor(p1:Player, p2:Player) {
        this.#P1 = p1
        this.#P2 = p2
    }

    getRandomItem(){
        let random = Math.random()*10
        if (random < 5) return 0
        else return 1
    }

    start(){
        let round:number = 0
        while (this.#P1.getHealth() > 0 && this.#P2.getHealth() > 0) {
            console.log(`================= Round : ${round} ==================`);
            this.#P1.showStatus()
            this.#P2.showStatus()
            console.log(`===============================================\n`);
            
            this.#P1.useItem(this.getRandomItem())
            this.#P2.useItem(this.getRandomItem())
            
            this.#P2.damage(this.#P1.getPower())
            this.#P1.damage(this.#P2.getPower())
            
            round++
        }
        this.#P1.showStatus()
        this.#P2.showStatus()
        console.log(`=================================`);
        if (this.#P1.getHealth() <= 0) console.log(`|    The Winner is P2 : ${this.#P2.getName()}   |`);
        else console.log(`|  The Winner is : P1 : ${this.#P1.getName()}   |`);
        console.log(`=================================\n`);
        
    }
}

const hanif:Player = new Player('Hanif')
const ahmad:Player = new Player('Ahmad')

const shootingGame:ShootingGame = new ShootingGame(hanif,ahmad);
shootingGame.start()
