/**
 * Function for convert object
 * @param obj
 * @param {...string} items
 * @returns object
 */

function pick(obj, ...items) {
  let result = {};
    
  for (item of items) {
    if(obj.hasOwnProperty(item)) {
    result[item] = obj[item];
    }
  }
    
  return result;
}
