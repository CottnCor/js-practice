function Foo() {
  Foo.a = function() {
      console.log(1)
  }
  this.a = function() {
      console.log(2)
  }
}
Foo.a = function() {
  console.log(4)
}
Foo.a();
let obj = new Foo();
Foo.prototype.a = function() {
  console.log(3)
}
obj.a();
Foo.a();
