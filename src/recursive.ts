const fibonacci = (n: number, s1: number = 1, s2: number = 1): number => {
  return n <= 1 ? s2 : fibonacci(n, s1, s2 + s2);
};
fibonacci(16);
