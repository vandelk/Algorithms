/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//            v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

// initialize empty strings called tempS and tempT
// loop through the string S
    // if the current letter is #
        //use slice to remove last character from temp
    //else
        //add current letter to temp

// loop through the string T
    // if the current letter is #
        //use slice to remove last character from temp
    //else
        //add current letter to temp

// return tempS === tempT


function backspaceStringCompare(S, T) {
    let tempS = "";
    let tempT = "";

    for(const letter in S) {
        if( letter === '#') {
            tempS = tempS.slice(0, tempS.length-1);
        }
        else {
            tempS += letter;
        }
    }

    for(const letter in T) {
        if( letter === '#') {
            tempT = tempT.slice(0, tempT.length-1);
        }
        else {
            tempT += letter;
        }
    }

    return tempS === tempT
 }

//---------------------

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))