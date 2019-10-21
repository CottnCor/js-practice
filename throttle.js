const throttle = (fn, delay = 500) => {
  let canRun = true;
  return function () {
    if(!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
       canRun = true;
    }, delay);
  }
}