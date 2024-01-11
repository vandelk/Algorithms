//Number of '2's in the factorization of a number
function twoCount(n) { 
    //Setup
    var count = 0;
    // in general, we dont want to modify the param value
    var currVal = n;

    //Work
    while(currVal % 2 === 0) {
        currVal /= 2;
        count++;
    }

    //Return
    return count;
}

console.log(twoCount(24)); //should be 3
console.log(twoCount(17280)); //should be 7

/* -----------------------------------------------------------------  */

function catSteps(start, finish) {
    // Setup
    var jumpCount = 0;
    var amountToJump = finish-start; 

    // Work
    while(amountToJump > 2) {
        amountToJump -= 3;
        jumpCount++;
    }

    jumpCount += amountToJump;

    // Return
    return jumpCount;
}

console.log(catSteps(1,5)); //should be 2
console.log(catSteps(1,7)); //should be 2  - 7-3 = 4
console.log(catSteps(2,10)); //should be 4 - 10-3 = 7 , 7-3 = 4

/* -----------------------------------------------------------------  */

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const expected = [0, 1, 3, 0, 4];

function shiftFromIndex(items, startIndex) {
    const firstItem = items[startIndex];

    if(items.length > 0) {
        for(let i = startIndex + 1; i < items.length; i++) {
            items[i-1] = items[i]
        }

        items.length = items.length -1;
    }
}

function removeElement(nums, val) {
    // Setup
    

    // Work
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            shiftFromIndex(nums, i);
            i--;
        }
        // Another iteration of answer
        // while(nums[i] === val) { 
        //     shiftFromIndex(nums, i);
        // }
    }

    // Return
    return nums.length;
}

console.log(removeElement(arr, 2));
console.log(arr);

// More efficent version
function removeElement2(nums, val) {
    let count = 0;

    for(var i = 0; i < nums.length-count; i++) {
        if(nums[i] === val) {
            nums[i] =  nums[nums.length - 1 - count];

            count++;
            i--;
        }
    }
    nums.length = nums.length - count;
    return nums.length;
}

console.log(removeElement2(arr, 2));
console.log(arr);
