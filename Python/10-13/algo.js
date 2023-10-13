/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    let freq = {}
    for(let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if(key in freq) {
            freq[key] += 1;
        }
        else {
            freq[key] = 1;
        }
    }

    let count = 0;
    let results = []
    for(num in freq) {
        if(freq[num] >= count) {
            count = freq[num];
        }
    }
    if(Object.keys(freq).length === results.length && results.length > 1) {
        return [];
    }

    return results;
}


// function mode(nums) {
//     if( nums.length < 1 ){ return []} 
//     if( nums.length === 1 ){ return nums}

//     let most_freq = 0
//     let least_freq = 1000000
//     let freq_table = Object()
//     let answerArr = []

//     for( let i=0; i<nums.length; i++){
//         if(freq_table[nums[i]] != undefined){
//         freq_table[nums[i]] += 1
//         } else {
//         freq_table[nums[i]] = 1
//         }
//     }

//     for(let j = 0; j<nums.length; j++){
//         most_freq = Math.max(most_freq, freq_table[nums[j]])
//         least_freq = Math.min(least_freq, freq_table[nums[j]])
//     }

//     if(least_freq == most_freq){return []}
    
//     for( const key in freq_table){
//         if(most_freq == freq_table[key]){
//         answerArr.push(key)
//         }
//     }

//     return answerArr
// }


console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))