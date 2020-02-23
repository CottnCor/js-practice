class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
  static say(content: string = '') {
    console.log(`Animal sayed ${content}.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
  say(content: string = '') {
    console.log(`Dog sayed ${content}.`);
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
dog.say("wangwang");
