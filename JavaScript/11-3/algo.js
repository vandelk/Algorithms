/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [["name", "Pizza"], ["calories", 9001]];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 99],
  ];
  
  // bonus - uncomment
   obj1.__proto__ = obj2;
  
  // decide your ALGO roles:
  // 1. DRIVER 🚗
  // 2. PRESENTER 👩‍🏫👨‍🏫
  // 3. NAVIGATOR 🧭
  
  function entries(obj) {
    // remember to write the pseudocode first!

    // create a variable output and assign it to be an empty array
    // create a for in loop that looks eachObj at the obj given
        // push eachKey and obj[eachKey] to the output array
    // return output

    let output = [];
    for(eachKey in obj) {
        if(obj.hasOwnProperty(eachKey)) {
            output.push([eachKey, obj[eachKey]])
        }
    }
    return output;
  }
  
     console.log(entries(obj1));
     console.log(entries(obj2));