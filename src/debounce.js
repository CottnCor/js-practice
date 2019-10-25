const debounce =  (callback, delay = 500) => {
  let timer = Object.create(null);
  return function () {
    clearTimeout(timer);
    timer = serTimeout(() => {
      callback.apply(this, arguments);
    }, delay)
  }
}