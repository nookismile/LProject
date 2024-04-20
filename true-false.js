/**
 * Function for sum numbers
 * @param {number[]} arr
 * @param {number} k
 * @returns {boolean}
 */

let arr = [10, 15, 3, 7];
let num = 17;

function sum(arr, k) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i]+nums[j]===k) {
                return true;
            }
        }
    }
    return false;
}

sum(arr, num);