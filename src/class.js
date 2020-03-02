/*jshint esversion: 9 */

/**
 * define step 1.
 */
function Animal(name) {
  this.name = name;
}

Object.assign(Animal.prototype, {
  say() {
    console.log(`my name is ${this.name}.`);
  }
});

console.log('define step 1.');

const dog = new Animal('wangwang');
dog.say();

//////////////////////////////////////////////

/**
 * define step 2.
 */
class Factory {
  constructor(product) {
    this.product = product;
  }
  make() {
    console.log(`my product is ${this.product}.`);
  }
}

// class 本身是一个 function，并且本身就指向 构造函数，只是构造函数的另一种写法。
console.log(Factory === Factory.prototype.constructor);

// 根据上面的思路，class 的方法当然都是定义在 prototype 属性上面。
Object.assign(Factory.prototype, {
  close() {
    console.log(`closed !!!`);
  }
});

console.log('define step 2.');

const toyFactory = new Factory('toy');
toyFactory.make();
toyFactory.close();

//////////////////////////////////////////////

/**
 * handwriting 「new」
 * @param {构造函数} custructor
 * @param {构造函数参数} params
 */
function _new() {
  const args = [].slice.apply(arguments);
  const constructor = args.shift();
  const context = Object.create(constructor.prototype);
  const result = constructor.apply(context, args);
  return typeof result === 'object' && result != null ? result : context;
}

console.log('handwriting 「new」');

const bird = _new(Animal, 'jiujiu');
bird.say();

//////////////////////////////////////////////

/**
 * define extends 1.
 */

function _new() {
  const args = Array.from(argument);
  const constructor = args.shift();
  if (typeof constructor !== 'function') {
    throw 'first param must be a constructor funciton';
  }
  _new.target = constructor;
  const newObj = Object.create(constructor.prototype);
  const result = constructor.apply(newObj, args);
  const isObject = typeof result === 'object' && result !== null;
  return isObject ? result : newObj;
}
