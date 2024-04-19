/**
 * Function for sort string
 * @param {string[]} arr
 * @param {'asc' | 'desc'} param
 * @returns {*[]}
 */

function sortStrings(arr, param = "asc") {
    const newArr = [...arr];
    return newArr.sort((a, b) => {
        if (param === 'asc') {
            return a.localeCompare(b, ["ru", "en"], {caseFirst: 'upper'});
        } else if (param === 'desc') {
            return b.localeCompare(a, ["ru", "en"], {caseFirst: 'upper'});
        } else if (param !== 'asc' || param !== 'desc'){
          throw new Error('Invalid param!');
        }
    })
}
