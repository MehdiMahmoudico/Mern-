class Unit {
    constructor(name, cost, power, resilience) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
    }
  
    attack(target) {
      target.resilience -= this.power;
      console.log(`${this.name} attacks ${target.name}, reducing their resilience to ${target.resilience}`);
    }
  }
  
  class Effect {
    constructor(name, cost, text, stat, magnitude) {
      this.name = name;
      this.cost = cost;
      this.text = text;
      this.stat = stat;
      this.magnitude = magnitude;
    }
  
    play(target) {
      if (this.stat === 'resilience') {
        target.resilience += this.magnitude;
      } else if (this.stat === 'power') {
        target.power += this.magnitude;
      }
      console.log(`${this.name} played on ${target.name}, ${this.text}`);
    }
  }
  
  // Instance's Creation
  const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
  const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
  
  const hardAlgorithm = new Effect('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', 3);
  const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2);
  const pairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2);
  
  // Tour 1
  console.log('Turn 1:');
  hardAlgorithm.play(redBeltNinja);
  console.log(`Red Belt Ninja's resilience: ${redBeltNinja.resilience}\n`);
  
  // Tour 2
  console.log('Turn 2:');
  unhandledPromiseRejection.play(redBeltNinja);
  console.log(`Red Belt Ninja's resilience: ${redBeltNinja.resilience}\n`);
  
  // Tour 3
  console.log('Turn 3:');
  pairProgramming.play(redBeltNinja);
  console.log(`Red Belt Ninja's power: ${redBeltNinja.power}`);
  redBeltNinja.attack(blackBeltNinja);
  console.log(`Black Belt Ninja's resilience: ${blackBeltNinja.resilience}`);

  