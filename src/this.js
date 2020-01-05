let x = 1;
const obj = {
  x: 2,
  printX: () => {
    console.log(this.x);
  }
}
setInterval(obj.printX.bind(obj), 1000);