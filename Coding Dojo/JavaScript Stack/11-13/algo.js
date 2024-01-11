/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                      V
// RIOT

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

//Pseudo code
    // define an object named freqTable initalize to an empty object
    // create a for loop that iterates to the length of str1 that starts at 0 and increases by 1 each loop
        // if str[i] is not a number add as a key to freqTable and give it a value of 0
        // create a variable named temp to hold the string of numbers
        // while str[i] is a number
            // concat str[i] to temp
            // i++
        //use parseInt() to convert temp to a number and add it to the value of str[i]
    // sort freqTable by keys in alphabetical order using .sort()
    // create variable named answer that is assigned to an empty string
    // create a loop that goes through freqTable
        // concat key to answer
        // concat keys values to answer
    // return answer

    const str1 = "b70a164c32a20c10";
    const expected1 = "a184b70c42";

    function rehash(str) {
        let freqTable = new Object;
        let char = "";
        let temp = "";
        for(let i = 0; i < str.length; i++) {
            if(isNaN(str[i])) {
                if( char.length > 0) {
                    freqTable[char] += parseInt(temp);
                }
                char = str[i];
                temp = "";
                if(freqTable[char] === undefined) {
                    freqTable[char] = 0;
                }
            }
            else {
                temp += str[i];
                //freqTable[char] += temp;
            }
        }
        let answer = "";
        let sortedKeys = Object.keys(freqTable).sort();
        return freqTable //will be answer after sorting and adding to answer
    }

    console.log(rehash(str1))