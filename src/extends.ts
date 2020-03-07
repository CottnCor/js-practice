class Animal {
    public static say(content = '') {
        console.log(`Animal sayed ${content}.`);
    }
    public move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    public bark() {
        console.log('Woof! Woof!');
    }
    public say(content = '') {
        console.log(`Dog sayed ${content}.`);
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
dog.say('wangwang');
