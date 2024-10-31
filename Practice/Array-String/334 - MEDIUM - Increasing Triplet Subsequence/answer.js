/**
 * @param {number[]} nums
 * @return {boolean}
 */
export var increasingTriplet = function (nums) {
  let hasTriplet = false;
  let triplet = [];

  for (var i = 0; i < nums.length; i++) {
    if (triplet.length === 0) {
      triplet.push(nums[i]);
    } else if (triplet[triplet.length - 1] < nums[i]) {
      triplet.push(nums[i]);
    }
  }

  if (triplet.length > 2) {
    hasTriplet = true;
  }

  return hasTriplet;
};
