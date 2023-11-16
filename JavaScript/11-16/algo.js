const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        // area = length * height using shorter height since water overflows
        // the short side first.
        const area = (right - left) * Math.min(heights[left], heights[right]);
        area > maxArea && (maxArea = area);
        // Increment the idx that points to the shorter wall to find a taller wall.
        heights[left] < heights[right] ? left++ : right--;
    }
    return maxArea;
}

console.log(containerWithMostWater(heights1)) //49
console.log(containerWithMostWater(heights2)) //1
console.log(containerWithMostWater(heights3)) //16
console.log(containerWithMostWater(heights4)) //2