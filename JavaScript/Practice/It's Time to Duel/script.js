class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name,cost,power,res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacks ${target.name}, reducing their resilience to ${target.res}`);
    }
}

class Effect extends Card {
    constructor(name,cost){
        super(name, cost,effect);
        this.effect = effect;
    }
    effect(target){
        Unit = target;
        power = target.power
        res = target.res
        if(Effect.name === 'Hard Algorithm'){
            Effect.cost -= 2;
            target.res += 3;
        }
        if(Effect.name === 'Unhandled Promise Rejection'){
            Effect.cost -= 1;
            target.res -= 2;
        }
        if(Effect.name === 'Pair Programming'){
            Effect.cost -= 3;
            target.power += 2;
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const BlackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
const HardAlgorithm = new Effect("Hard Algorithm",2);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1);
const PairProgramming = new Effect("Pair Programming",3);
RedBeltNinja.attack(BlackBeltNinja);




