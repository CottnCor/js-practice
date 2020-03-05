const asyncFun = new Promise(function(resolve, reject) {
  setTimeout(function noName() {
    resolve('yes');
  }, 1000);
  console.log('asyncFun');
});

asyncFun
  .then(function(param) {
    return param;
  })
  .catch(function(param) {
    return param;
  });

const noNameFun = async () => {
  await console.log(asyncFun);
};

console.log('Hi!');

noNameFun();

console.log('Are you OK?');

/////////////////////////////

class _Promise {}
