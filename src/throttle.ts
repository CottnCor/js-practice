/* jshint esversion: 6 */

const throttle = <T extends Function>(fn: T, delay = 500) => {
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

const throttle_fix = <T extends Function>(fn: T, delay = 500) => {
    let limited = false;
    let start = Date.now();
    return function() {
        let current = Date.now();
        limited = limited && current - start > delay;
        if (!limited) {
            fn.apply(this, arguments);
            limited = true;
            start = Date.now();
        }
    };
};

const mousemouve = throttle_fix((e: MouseEvent) => {
    console.log(this);
    console.log(e.pageX, e.pageY);
}, 500);

document.querySelector('#id').addEventListener('mousemouve', (e) => {});
