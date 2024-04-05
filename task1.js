/**
 *
 * @param arr
 * @param param
 * @returns {*[]}
 */

function sortStrings(arr, param = "asc") {
    const newArr = [...arr];
    return newArr.sort((a, b) => {
        if (param === 'asc') {
            return a.localeCompare(b, ["ru", "en"], {caseFirst: 'upper'});
        } else if (param === 'desc') {
            return b.localeCompare(a, ["ru", "en"], {caseFirst: 'upper'});
        }
    })
}