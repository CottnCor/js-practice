/* jshint esversion: 6 */

let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve("jaksldf");
  // reject("fsdfds");
});

// promise.then(function(param) {
//   return param;
// }).catch(function (param) {
//   return param;
// });

const result = async () => { await console.log(promise); };

result()

console.log('Hi!');

