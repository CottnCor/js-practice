/* jshint esversion: 6 */

function add() {
    let _args = [...arguments];
    let _add = function() {
        _args.push(...arguments);
        return _add;
    };
    _add.valueOf = function() {
        return _args.reduce((a, b) => a + b);
    };
    return _add;
}
