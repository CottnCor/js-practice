/*jshint esversion: 6 */

const Fruit = class {
  constructor(name){
    this.name = name;
    this.age = 0;
  }
  get Name() {
    console.log("i'm name");
    return this.name;
  }
}

const CreateFruitFactory = (...param) => class JuicyFruit extends Fruit {
  constructor(){
    super(...param);
  }
}

export default CreateFruitFactory;

class Plum extends CreateFruitFactory('Plum', 30){}

const plum = new Plum();

console.log(plum.Name);