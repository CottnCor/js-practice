/* jshint esversion: 6 */

/**
 *
 * @param {*} object
 */
const deepClone = (object) =>{
  if(!object && typeof object !== 'object') return;
  var tempObject = Array.isArray(object) ? new Array() : Object.create(null);
  for (const key in object) {
    if (typeof object[key] === 'object') {
      tempObject[key] = deepClone(object[key]);
    } else if(Array.isArray(object[key])) {
      tempObject[key] = object[key];
    }
  }
  return tempObject;
}

/**
 *
 * @param {*} object
 */
const shallowClone = (object) =>{

}