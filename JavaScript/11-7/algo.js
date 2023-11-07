/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };

const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
    // remember to write the pseudocode first!
    // create an variable named output that is initalized to "INSERT INTO "
    // concat tableName into the output str
    // create a variable named keys and assign it to columnValuePairs.keys(). This creates an array of strings
    // create a variable named values and assign it to columnValuePairs.values(). This creates an array of strings
    // create a for loop that iterates starting at i=0 and goes until keys.length with i+1
        //check if not the last iteration concat to output with 

    let output = "INSERT INTO " + tableName +" (";
    let keys = Object.keys(columnValuePairs);
    let values = Object.values(columnValuePairs);

    for(let i = 0; i < keys.length; i++) {
        if(i !== keys.length-1) {
            output += `${keys[i]}, `;
        }
        else {
            output  += `${keys[i]}) `;
        }
    }

    output += "VALUES (";

    for(let i = 0; i < values.length; i++) {
        if(i !== values.length-1) {
            if(typeof values[i] === 'string') {
                output += `'${values[i]}', `;
            }
            else {
                if(typeof values[i] === 'boolean') {
                    if(values[i] === true) {
                        output += `1, `;
                    }
                    else {
                        output += `-1, `;
                    }
                }
                else {
                    output += `${values[i]}, `;
                }
            }
        }
        else {
            if(typeof values[i] === 'string') {
                output += `'${values[i]}');`;
            }
            else {
                if(typeof values[i] === 'boolean') {
                    if(values[i] === true) {
                        output += `1);`;
                    }
                    else {
                        output += `-1);`;
                    }
                }
                else {
                    output += `${values[i]});`;
                }
            }
        }
    }

    return output;
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));