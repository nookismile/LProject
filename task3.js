/**
 * Function for convert object
 * @param obj
 * @param {...string} items
 * @returns object
 */

function omit(obj, ...items) {
   let result = {};
    
  for ([key, value] of Object.entries(obj)) {
    if(!items.includes(key)) {
      result[key] = value;
    }
  }  
  return result;
}
