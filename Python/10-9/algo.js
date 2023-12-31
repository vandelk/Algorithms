const nums1 = [-2, 5, 7, 0, 3];
const one_expected1 = 2;

const nums2 = [9, 9];
const one_expected2 = -1;
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    //Your code here
    if(nums.length < 3) {
        return -1;
    }
    let left = nums[0];
    let right = 0;
    for(let i = 2; i < nums.length; i++) {
        right += nums[i];
    }

    for(let i = 1; i < nums.length; i++ ) {
        if(left === right) {
            return i
        }

        right -= nums[i + 1]
        left += nums[i]
    }
    return -1;
}

console.log(balanceIndex(nums1)) // 2
console.log(balanceIndex(nums2)) // -1

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let count = 0;
    let isValid = false;
    for(let i = 0; i < queue.length;i++) {
        if(queue[i] === 1)
        {
            if(!isValid) {
                count = 6;
            }
            isValid = true;
        }
        
        if(isValid) {
            if(queue[i] === 1 && count >= 6) {
                count = 0;
            }
            else if(queue[i] === 0) {
                count++;
            }
            else if(queue[i] === 1 && count < 6) {
                return false;
            }
        }
    }
    return true;
}

console.log(socialDistancingEnforcer(queue1)) // false
console.log(socialDistancingEnforcer(queue2)) // true
console.log(socialDistancingEnforcer(queue3)) // true
console.log(socialDistancingEnforcer(queue4)) // true