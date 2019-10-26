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
  (array: Array<T>, compareFn?: ICompare<T>): Array<T>
}

/**
 *
 * @param a
 * @param b
 */
const defaultCompare: ICompare<any> = <T>(a: T, b: T) => {
  return a <= b ? Compare.LESS_THAN : Compare.BIGGER_THAN
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
  return array
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
  return array
}

/**
 *
 * @param array
 * @param compareFn
 */
const insertionSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = array[i]
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.LESS_THAN) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}

/**
 *
 * @param array
 * @param compareFn
 */
const mergeSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  const { length } = array
  if (length > 1) {
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}

const merge = <T>(
  left: Array<T>,
  right: Array<T>,
  compareFn: ICompare<T>
): Array<T> => {
  let i = 0
  let j = 0
  const result = new Array()
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

/**
 *
 * @param array
 * @param compareFn
 */
const quickSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  return quick(array, 0, array.length - 1, compareFn)
}

const quick = <T>(
  array: Array<T>,
  left: number,
  right: number,
  compareFn: ICompare<T>
) => {
  if (array.length > 1) {
    if (left < right) {
      let i = left
      let j = right
      let middle = Math.floor((i + j) / 2)
      let pivot = array[middle]
      swap(array, i, middle)
      while (left < right) {
        while (
          compareFn(array[right], pivot) === Compare.BIGGER_THAN &&
          left < right
        ) {
          right--
        }
        if (left < right) array[left++] = array[right]
        while (
          compareFn(array[left], pivot) === Compare.LESS_THAN &&
          left < right
        ) {
          left++
        }
        if (left < right) array[right--] = array[left]
      }
      array[left] = pivot
      quick(array, i, left - 1, compareFn)
      quick(array, left + 1, j, compareFn)
    }
    return array
  }
}

/**
 *
 * @param array
 * @param compareFn
 */
const bucketSort: ISort<any> = <T>(
  array: Array<T>,
  compareFn: ICompare<T> = defaultCompare
) => {
  return array
}
