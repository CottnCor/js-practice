/* jshint esversion: 6 */

const throttle = (fn, delay = 500) => {
    let canRun = true;
    return function() {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
};

// 不使用 setTimeout

const throttle_fix = (fn, delay = 500) => {
    let limited = false;
    let start = Date.now();
    return function(...args) {
        let current = Date.now();
        limited = limited && current - start > delay;
        if (!limited) {
            fn.apply(this, args);
            limited = true;
            start = Date.now();
        }
    };
};

const mousemouve = throttle_fix(function(e) {
    console.log(this);
    console.log(e.pageX, e.pageY);
}, 500);

document.querySelector('#id').addEventListener('mousemouve', mousemouve);
