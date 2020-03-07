/* jshint esversion: 6 */

const debounce = (callback, delay = 500) => {
    let timer = Object.create(null);
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
};
