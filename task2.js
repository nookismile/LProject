/**
 * Function for convert object
 * @param obj
 * @param {...string} items
 * @returns object
 */

function pick(obj, ...items) {
    return Object.fromEntries(
        Object.entries(obj).filter(([item]) => items.includes(item))
    );
}
