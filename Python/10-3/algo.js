/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    let reverse = "";

    let split = str.split(" ")

    for(let i = 0; i < split.length; i++) {
        let word = ""
        for(let j = split[i].length-1; j >= 0; j--) {
            word += split[i][j]
        }
        reverse += word
        reverse += " "
    }

    return reverse
}

console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));


// NOT USING SPLIT
// function reverseWords(str) {
//     let reversed = "";
//     let tempWord = "";

//     for(let i = 0; i < str.length; i++) {
//         if( str[i] != " " && str[i + 1] != undefined) {
//             tempWord += str[i]
//         }
//         else {
//             if(str[i + 1] == undefined) {
//                 tempWord += str[i]
//             }
//             for(let j= tempWord.length-1; j >= 0; j--) {
//                 reversed += tempWord[j]
//             }
//             reversed += " "
//             tempWord = ""
//         }
//     }
//     return reversed;
// }

// console.log(reverseWords(str1));
// console.log(reverseWords(str2));
// console.log(reverseWords(str3));


/* 
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

const two_str2 = "hello";
const two_expected2 = "hello";

const two_str3 = "   This  is a   test  ";
const two_expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    var reverse = "";
    let split = wordsStr.split(" ");
    for(let i = split.length-1; i >= 0; i--) {
        reverse += split[i]
    }

    return reverse
}   

console.log(reverseWordOrder(two_str1))
console.log(reverseWordOrder(two_str2))
console.log(reverseWordOrder(two_str3))

/* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const three_str1 = "abcABC";
const three_expected1 = "abcABC";

const three_str2 = "helloo";
const three_expected2 = "helo";

const three_str3 = "";
const three_expected3 = "";

const three_str4 = "aa";
const three_expected4 = "a";

// Bonus
const three_str5 = "hellool";
const three_expected5 = "heol";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {}