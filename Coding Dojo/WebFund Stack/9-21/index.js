/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

  var numbersA1 = [20, 10, 30];
  var numbersB1 = [10, 30, 20];
  var expected1 = [30, 40, 50];
  
  /**
   * Returns a new array that is the sum of the columns of the two given arrays
   * of equal lengths.
   * @param {Array<number>} nums1
   * @param {Array<number>} nums2
   * @returns {Array<number>} The column sums.
   */
  function sumArrColumns(nums1, nums2) {
    // code here
    var colSum = [];
    for(var i = 0; i < nums1.length; i++) {
        colSum.push(nums1[i] + nums2[i]);
    }
    return colSum;
  }

  console.log(sumArrColumns(numbersA1, numbersB1));
  
  /*****************************************************************************/
  
  /* 
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
  
  Given an array, rotate the array in place to the right by "k" steps, where "k" is
  non-negative.
  
  
  BONUS: The given array must be mutated, do not return a new array.
  */
  
  const nums1 = [1, 2, 3, 4, 5, 6, 7];
  const k1 = 3;
  const expected1B = [5, 6, 7, 1, 2, 3, 4];
  /* Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]
  */
  
  const nums2 = [-1, -100, 3, 99];
  const k2 = 2;
  const expected2B = [3, 99, -1, -100];
  /* Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
  */
  
  const nums3 = [1, 2, 3, 4];
  const k3 = 4;
  const expected3B = [1, 2, 3, 4];
  /* Explanation: 
  After 4 rotations it is back to it's starting point.
  */
  
  const nums4 = [1, 2];
  const k4 = 5;
  const expected4B = [2, 1];
  /* 
  Explanation: After 2 rotations the array is back to it's original order.
  After 4 rotations it is back to it's original order again.
  1 more rotation makes 5.
  */
  
  /**
   * Rotates the array items to the right "k" times.
   * @param {Array<number>} nums The numbers to be rotated.
   * @param {number} k The amount of times to rotate the last item to the front.
   * @returns {Array<number>} The given array after being rotated.
   */
  function rotate(nums, k) {
    var temp = 0;
    var rotateAmt = k % nums.length;
    while(rotateAmt > 0) {
        for(var i = nums.length - 1; i > 0; i--) {
            if(i === nums.length - 1) {
                temp = nums[i];
            }
            nums[i] = nums[i-1];
        }
        nums[0] = temp; 
        rotateAmt--;
    }

    return nums;
  }

  console.log(rotate(nums1,k1));
  console.log(rotate(nums2,k2));
  console.log(rotate(nums3,k3));
  console.log(rotate(nums4,k4));