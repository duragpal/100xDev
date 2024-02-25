class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
  speak() {
    console.log("Hi there   " + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("dog", 4, "meow meow");
cat.speak();
