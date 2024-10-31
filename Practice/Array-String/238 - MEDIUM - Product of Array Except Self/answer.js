// O(n^2) complexity solution

/**
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums) {
  // iterate through the array for each element, skipping element i each time
  let sumArr = [];
  for (var i = 0; i < nums.length; i++) {
    let sum = 1;
    sum;
    for (var k = 0; k < nums.length; k++) {
      if (i !== k) {
        sum = sum * nums[k];
      }
    }
    sumArr.push(sum);
  }

  return sumArr;
}

// O(n) time and without using the division operation.
// in order to proceed with the full answer, I need a solution that doesn't exceed the time limits

/**
 * get the product of all elements before (forward)
 * then the product of all elements after (in reverse)
 * while getting the product of all elements after, calculate the final answer
 */

/**
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf_ON(nums) {
  // iterate through the array for each element, skipping element i each time

  let prodArrayReverse = [];
  let prodReverse = 1;
  for (var i = 0; i < nums.length; i++) {
    prodReverse = prodReverse * nums[nums.length - i - 1];
    prodArrayReverse.push(prodReverse);
  }

  let prodArrayWithException = [];
  let prod = 1;
  for (var i = 0; i < nums.length; i++) {
    if (i == 0) {
      // check prod of all but the first index
      prodArrayWithException.push(prodArrayReverse[nums.length - 2]);
    } else if (i == nums.length - 1) {
      // check prod of all but the last index
      prodArrayWithException.push(prod);
    } else {
      // check prod with all before multiplied by all after
      prodArrayWithException.push(prod * prodArrayReverse[nums.length - i - 2]);
    }
    prod = prod * nums[i];
  }

  return prodArrayWithException;
}

// O(1) is this even possible?
