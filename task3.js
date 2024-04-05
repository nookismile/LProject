/**
 *
 * @param obj
 * @param items
 * @returns {{[p: string]: unknown}}
 */

function omit(obj, ...items) {
    return Object.fromEntries(
        Object.entries(obj).filter(([item]) => !items.includes(item))
    );
}
