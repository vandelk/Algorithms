/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello    world     ";
const expected2 = "hello    world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 * 
 * DON'T USE THE BUILT IN FUNCTION TRIM()
 */
function trim(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] != " " ) {
            newStr = str.substring(i);
            break;
        }
    }
    for(let i = newStr.length-1; i >= 0; i--) {
        if(newStr[i] != " " ) {
            newStr = newStr.substring(0,i+1);
            break;
        }
    }
    return newStr;
}

console.log(trim(str1));
console.log(trim(str2));

/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if( s1.length !== s2.length) {
        return false;
    }
    let freqObj1 = {};
    let freqObj2 = {};

    for(let i = 0; i < s1.length; i++) {
        let char1 = s1[i].toLowerCase();
        let char2 = s2[i].toLowerCase();

        if(freqObj1.hasOwnProperty(char1)) {
            freqObj1[char1] += 1;
        }
        else {
            freqObj1[char1] = 1;
        }

        if(freqObj2.hasOwnProperty(char2)) {
            freqObj2[char2] += 1;
        }
        else {
            freqObj2[char2] = 1;
        }
    }

    for(let key in freqObj1) {
        if(freqObj2[key] === undefined) {
            return false;
        }

        let freq1Val = freqObj1[key]
        let freq2Val = freqObj2[key]

        if( freq1Val != freq2Val ){
            return false;
        }
    }

    return true;
}

console.log(isAnagram(two_strA1, two_strB1));
console.log(isAnagram(two_strA2, two_strB2));
console.log(isAnagram(two_strA3, two_strB3));
console.log(isAnagram(two_strA4, two_strB4));