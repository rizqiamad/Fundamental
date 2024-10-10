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
        let round:number = 1
        while (this.#P1.getHealth() > 0 && this.#P2.getHealth() > 0) {
            console.log(`================= Round : ${round} ==================`);
            this.#P1.showStatus()
            this.#P2.showStatus()
            
            this.#P1.useItem(this.getRandomItem())
            this.#P2.useItem(this.getRandomItem())
            
            this.#P2.damage(this.#P1.getPower())

            if (this.#P2.getHealth() <= 0){
                console.log(`\n${this.#P2.getName()} has been damaged by ${this.#P1.getName()} with ${this.#P1.getPower()} Power`);
                console.log(`===============================================\n`);
                break
            }

            console.log(`\n${this.#P2.getName()} has been damaged by ${this.#P1.getName()} with ${this.#P1.getPower()} Power`);
            this.#P1.damage(this.#P2.getPower())

            if (this.#P1.getHealth() <= 0) {
                console.log(`${this.#P1.getName()} has been damaged by ${this.#P2.getName()} with ${this.#P2.getPower()} Power`);
                console.log(`===============================================\n`);
                break
            }
            
            console.log(`${this.#P1.getName()} has been damaged by ${this.#P2.getName()} with ${this.#P2.getPower()} Power`);
            console.log(`===============================================\n`);
            
            round++
        }
        this.#P1.showStatus()
        this.#P2.showStatus()
        if (this.#P1.getHealth() <= 0) console.log(`The Winner is P2 ${this.#P2.getName()}`);
        else console.log(`The Winner is P1 : ${this.#P1.getName()}`);
        
    }
}

const player1:Player = new Player('Player 1')
const player2:Player = new Player('Player 2')

const shootingGame:ShootingGame = new ShootingGame(player1,player2);
shootingGame.start()
