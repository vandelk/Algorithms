/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */

function shiftFromIndex(items,idx) {
    const firstItem = items[idx];

    if(items.length > 0) {
        for(let i = idx - 1; i < items.length; i++) {
            items[i-1] = items[i]
        }

        items.length = items.length -1;
    }
}

// function removeAt(items, idx) {
//     // code here

//     if(items[idx]) {
//         var answer = items[idx];
//         shiftFromIndex(items, idx);
//     }
//     else {

//         return null;
//     }

//     return answer;
// }

function removeAt(arr = [], idx) {
    if (idx < 0 || idx >= arr.length) {
      return null;
    }
  
    let removed = arr[idx];
  
    for (let i = idx; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    // when the loop is done the 2nd to last item is set to the last item
    // so there is a duplicate that needs to be removed
    arr.pop();
    return removed;
  }

// console.log(removeAt(arr1,removeIdx1));
// console.log(removeAt(arr2,removeIdx2));
// console.log(removeAt(arr3,removeIdx3));

/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function unshift(items, newItem) {
    for(var i = items.length-1; i >= 0; i--) {
        items[i+1] = items[i];
    }
    items[0] = newItem;
}

function minToFront(nums) {
  // code here
    var min = nums[0];
    var idx = 0;
    for(var i = 0; i < nums.length; i++) {
        if(min > nums[i]) {
            min = nums[i];
            idx = i;
        }
    }
    removeAt(nums,idx);
    unshift(nums, min);
    return nums;
}

console.log(minToFront(nums1));
console.log(minToFront(nums2));
console.log(minToFront(nums3));