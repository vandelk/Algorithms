// PROBLEM DESCRIPTION
// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = "";
    let longest = word1.length >= word2.length ? word1 : word2;

    for(let i = 0; i < longest.length; i++) {
        if(word1[i]) {
            output += word1[i];
        }
        if(word2[i]) {
            output += word2[i];
        }
    }

    return output;
};
