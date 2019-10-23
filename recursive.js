/**
 *
 * @param {*} n
 */
var fibonacci = function () {
    var memory = [0, 1];
    var fn = function (n) {
        if (memory[n] != null)
            return memory[n];
        return (memory[n] = fn(n - 2) + fn(n - 1));
    };
    return fn;
};
console.log(fibonacci()(3));
