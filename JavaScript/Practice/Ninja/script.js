class Ninja{
    constructor(name,health=90,speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank a sake and now has ${this.health} health.`);
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

