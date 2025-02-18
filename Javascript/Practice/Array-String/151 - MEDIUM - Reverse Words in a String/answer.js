/**
 * @param {string} s
 * @return {string}
 */
export var reverseWords = function (s) {
  let word = "";
  let wordDict = {};
  let n = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      word += s[i];
    } else {
      if (word !== "") {
        wordDict[n] = word;
        n++;
      }
      word = "";
    }

    // test for end of word
    if (i == s.length - 1) {
      wordDict[n] = word;
    }
  }

  return constructStringInReverse(wordDict, n);
};

// n is the biggest number in the dictionary
function constructStringInReverse(strDict, n) {
  let newString = "";
  for (var i = 0; i <= n; i++) {
    // if the element is not an empty string
    if (strDict[n - i] !== "") {
      newString += strDict[n - i];
      // add a space if the next element is not an empty string
      if (i !== n) {
        newString += " ";
      }
    }
  }
  return newString;
}
