// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];
// [1, 3, 4]

[]
[1,2,2]

// [1,2]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
    //! write the pseudocode first!
    //1. create a temp variables for our output array and largerLength
    //2. compare arr1s and arr2s length to find the one with the largest length and assign the length to the largerLength variable
    //3. create a for loop that iterates from 0 to the largerLength
    //4. compare the values in both arrays at the index from the for loop iterator and add the smallest value into the output array
    //5. 

    
    //! do not use Set()
 }

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]
