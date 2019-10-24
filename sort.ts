/**
 *
 */
const Compare: { LESS_THAN: number; BIGGER_THAN: number } = {
  LESS_THAN: 0,
  BIGGER_THAN: 1
}

/**
 *
 */
interface ICompare<T> {
  (a: T, b: T): number
}

/**
 *
 */
interface ISwap<T> {
  (array: Array<T>, a: number, b: number): void
}

/**
 *
 */
interface ISort<T> {
  (array: Array<T>, compareFn?: ICompare<T>): void
}

/**
 *
 * @param a
 * @param b
 */
const defaultCompare: ICompare<any> = <T>(a: T, b: T) => {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

/**
 *
 * @param {*} array
 * @param {*} a
 * @param {*} b
 */
const swap: ISwap<any> = <T>(array: Array<T>, a: number, b: number) => {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 *
 * @param array
 * @param compareFn
 */
const bubbleSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.LESS_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
}

/**
 *
 * @param array
 * @param compareFn
 */
const selectionSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  let indexMin = 0
  const { length } = array
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.LESS_THAN) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
}

/**
 *
 * @param array
 * @param compareFn
 */
const insertionSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {}

/**
 *
 * @param array
 * @param compareFn
 */
const mergeSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {}

/**
 *
 * @param array
 * @param compareFn
 */
const quickSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {}

/**
 *
 * @param array
 * @param compareFn
 */
const bucketSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {}

