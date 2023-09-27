/* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcdddaaa";
  const expected1 = "a4b2c1d3a3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   * 
   * steps below
   */
  function encodeStr(str) {
    let encode = "";
    let count = 1;
    if(str.length > 1) {
        for(let i = 0; i < str.length;i++) {
            if(str[i] === str[i+1]){
                count++;
            }
            else {
                encode += str[i]
                encode += count
                count = 1;
            }
        }
        if(encode.length < str.length) {
            return encode;
        }
        else {
            return str;
        }
    }
    else {
        return str;
    }
  }

  console.log(encodeStr(str1))
  console.log(encodeStr(str2))
  console.log(encodeStr(str3))
  console.log(encodeStr(str4))
  
  /*****************************************************************************/

  /* 
  String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 * 
 * - create a decoded var
 * - loop through given string
 * - if my current char is not NaN (the currenter char is a number)
 * - continue my loop until my current char is NaN, each time recording the additional new digit
 * - repeat the current char the number of times
 * - return new decoded var
 */
function decodeStr(str) {
    let decode = "";
    let i = 0;
    while(i < str.length) {
        let char = str[i++]

        let numStr = ""

        let isNumber = isNaN(parseInt(str[i])) === false;

        while( i < str.length && isNumber) {
            numStr += str[i++];
            isNumber = isNaN(parseInt(str[i])) === false;
        }
        decode += char.repeat(numStr);
    }
    return decode;
}

console.log(decodeStr(two_str1));
console.log(decodeStr(two_str2));
