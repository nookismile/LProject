/**
 *
 * @param ob
 * @param keys
 * @returns {{[p: string]: unknown}}
 */

function pick(obj, ...items) {
    return Object.fromEntries(
        Object.entries(obj).filter(([item]) => items.includes(item))
    );
}
