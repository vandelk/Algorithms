/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:

//1. initialize variables: currArr to an empty array, sum to 0, and ans to an empty array 
//2. for loop over the length of the array starting at index 0 (increment i+1)
    //3. for loop over the length of the array starting at index 0 (increment j+1)
        //4. if target value = sum
            //5. answer += currArr
        //6. add the current arr[j] element to sum and currArr
    //7. reset currArr and sum for next loop of i
//8. return answer
function consecutiveSum(arr, sum) {
    let currArr = [];
    let countingSum = 0;
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            currArr.push(arr[j]);
            countingSum += arr[j];
            if(countingSum === sum) {
                ans.push([...currArr]);
            }
            if(sum > k) {
                break;
            }
        }
        currArr = [];
        countingSum = 0;
    }
    return ans;
}

console.log(consecutiveSum(arr,k));