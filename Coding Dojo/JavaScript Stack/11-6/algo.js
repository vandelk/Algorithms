/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    // PSEUDOCODE!!!!
    // create output variable named answer and assign it to an empty array
    // create a count variable and assign to 0
    // create a for loop that iterates through items starting from 0 and +1 until its the length
        // create an inner for loop that iterates through the searchObj keys
            // check if the searchObj value that is being iterated through is equal to the value of the same key from the items array
                // increase count++
        //check if count is equal to the number of keys in searchObj
            // if it is add array entry to answer array
    // return answer

    let output = [];
    const searchObjLen = Object.keys(searchObj).length
    for(let item of items) {
        let count = 0;
        for(let key in searchObj) {
            if(searchObj[key] === item[key]) {
                count++;
            }
        }
        if(count === searchObjLen) {
            output.push(item)
        }
    }
    return output;
}


console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));