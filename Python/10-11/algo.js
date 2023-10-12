/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    // two variables are initialized: newArr as an empty array and dict as an empty object.
    // newArr will store the deduplicated values, dict will help keep track of which values have been seen
    newArr = []
    dict = {}

    // for loop is started, which will iterate from i = 0 to i = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        // this conditional checks if the current element nums[i] is not already a property in the dict object. this means the element has not been seen before
        if (!dict.hasOwnProperty(nums[i])) {
            // if the element is unique, it's pushed into newArr
            newArr.push(nums[i])
            // the element is added as a property to the dict object, with a value of 1. this marks the element as seen
            dict[nums[i]] = 1
        }
    }
    // the loop completes, newArr contains the deduplicated values. The function returns newArr
    return newArr
}

/*****************************************************************************/

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const two_nums1 = [3, 5, 4, 3, 4, 6, 5];
const two_expected1 = 6;

const two_nums2 = [3, 5, 5];
const two_expected2 = 3;

const two_nums3 = [3, 3, 5];
const two_expected3 = 5;

const two_nums4 = [5];
const two_expected4 = 5;

const two_nums5 = [];
const two_expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
  // this uses the reduce function to create a frequency map of the numbers in the nums array, the map object is initialized as an empty object
    // for each number (num) in nums, it increments the count in the map (map[num]) by one, or sets it to 1 if it doesn't exist yet
    const frequent = nums.reduce((map, num) => {
      map[num] = (map[num] || 0) + 1;
      return map;
  }, {});
  // this initiates a loop that iterates through the elements of the nums array
  for (const num of nums) {
      // for each element num, it checks if the frequency of num in the frequent map is equal to 1. If it is, it means num occurs only once in the array, making it the first non-repeated element, in that case, the function returns num
      if (frequent[num] === 1) {
          return num;
      }
  }
  // if no non-repeated element is found in the loop, the function returns null to indicate that
  return null;
}