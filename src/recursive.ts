/* jshint esversion: 6 */

/**
 *
 */
interface IFibonacci {
  (): Function
}

/**
 *
 * @param {*} n
 */
const fibonacci: IFibonacci = () => {
  const memory = [0, 1]
  const fn = (n: number) => {
    if (memory[n] != null) return memory[n]
    if (memory[n] != null)
    return (memory[n] = fn(n - 2) + fn(n - 1))
  }
  return fn
}

console.log(fibonacci()(3))
