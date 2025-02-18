/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export var kidsWithCandies = function(candies, extraCandies) {

    let sortedCandies = [...candies];
    sortedCandies.sort(function(a,b) {return a - b});
    let greatestNum = sortedCandies[sortedCandies.length - 1];
    let greatestArray = [];

    for (var i = 0; i < candies.length; i++){
        const currentCandyCount = candies[i] + extraCandies;
        if(currentCandyCount >= greatestNum) {
            greatestArray.push(true)
        } else {
            greatestArray.push(false);
        }
    }

    return greatestArray;
};