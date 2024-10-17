class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type

    }

    attack() {

        let attackType

        switch (this.type) {
            case "mago":
                attackType = "magia"
                break

            case "guerreiro":
                attackType = "espada"
                break

            case "monge":
                attackType = "artes marciais"
                break

            case "ninja":
                attackType = "shuriken"
                break
        }


        console.log(`O ${this.type} atacou usando ${attackType}`)
    

    }

}

let mago = new hero("Dambledore", "150", "mago")
let guerreiro = new hero("Mulan", 40, "guerreiro")
let monge = new hero("Coezen", 50, "monge")
let ninja = new hero("Jack Shan", 50, "ninja")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()


