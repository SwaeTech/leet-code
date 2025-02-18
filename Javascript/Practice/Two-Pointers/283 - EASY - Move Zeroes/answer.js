/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * example case: [0,1,0,3,12]
 * edge cases: [0] [0,0]
 * [1,0,1]
 */
export var moveZeroes = function (nums) {
  // handle length of 1 case
  if (nums.length == 1) {
    return nums;
  }

  let L = 0;
  let R = 1;
  for (var i = 0; i < nums.length; i++) {

    tempL = nums[L];
    tempR = nums[R];

    // switch elements
    if (nums[L] === 0 && nums[R] !== 0) {
      nums[L] = tempR;
      nums[R] = tempL;
    } 

    // increment L if at least one pointer is not at 0
    if(nums[L] !== 0 || nums[R] !== 0){
        L ++;
    }

    // increment R if not at the end of hte arrray
    if (R !== nums.length - 1) {
        R++;
    }
    
  }
  return nums
};

