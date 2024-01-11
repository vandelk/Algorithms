/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 * 
 * - create function that takes in a string
 * - create var for opening count
 * - create var for closing count
 * - loop through given string
 * - if current character is a "(" count it 
 * - if current character is a ")" count it (we could combine these two if)
 * - if closing count is greater than opening count return false
 */
function parensValid(str) {
    var openCount = 0;
    var openInd = 0;
    var closeCount = 0;
    var closeInd = 0;
    for(let i = 0; i < str.length; i++) {
        
        if (str[i] == '(') {
            openCount++;
            openInd = i;
        }

        if(str[i] == ')') {
            closeCount++;
            closeInd = i;
        }

        if (closeCount > openCount) {
            return false;
        }
    }

    if (closeInd < openInd) {
        return false;
    }

    if(openCount != closeCount){
        return false;
    }
    
    return true;
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))

/***************************************************************************/

/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
// {} [] ()
// if one starts but doesnt end before another ends invalid
function bracesValid(str) {
    let newArr = []
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            newArr = newArr.concat(str[i]);
        }
        else if(str[i] == ")" && newArr[newArr.length-1] == "("){
            newArr.pop();
        }
        else if(str[i] == "}" && newArr[newArr.length-1] == "{") {
            newArr.pop();
        }
        else if(str[i] == "]" && newArr[newArr.length-1] == "[") {
            newArr.pop();
        }
        
    }
    if(newArr.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(bracesValid(two_str1))
console.log(bracesValid(two_str2))
console.log(bracesValid(two_str3))