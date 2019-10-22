/**
 *
 */
const Compare = {
  LESS_THAN: 0,
  BIGGER_THAN: 1
}

/**
 *
 * @param {*} array
 * @param {*} a
 * @param {*} b
 */
const defaultCompare = (a, b) => {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

/**
 *
 * @param {*} array
 * @param {*} a
 * @param {*} b
 */
const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]]
}

/**
 *
 * @param {*} array
 */
const bubbleSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; index < length - i - 1; j++) {
      if(compareFn(array[j], array[j + 1]) === Compare.LESS_THAN){
        swap(array, j, j + 1)
      }
    }
  }
}

/**
 *
 * @param {*} array
 */
const selectionSort = (array) => {

}

/**
 *
 * @param {*} array
 */
const insertionSort = (array) => {

}

/**
 *
 * @param {*} array
 */
const mergeSort = (array) => {

}

/**
 *
 * @param {*} array
 */
const quickSort = (array) => {

}

/**
 *
 * @param {*} array
 */
const bucketSort = (array) =>{

}
