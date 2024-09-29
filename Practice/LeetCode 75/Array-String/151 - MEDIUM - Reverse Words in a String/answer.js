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
      wordDict[n] = word;
      n++;
      word = "";
    }

    // test for end of word
    if (i == s.length - 1) {
      wordDict[n] = word;
    }
  }

  return constructStringInReverse(wordDict, n);
};

function constructStringInReverse(strDict, n) {
  let newString = "";
  console.log(strDict);
  // create a string of n words using the string dictionary given
  for (var i = 0; i < n + 1; i++) {
    newString += strDict[n-i];
    if (i !== n) {
      newString += " ";
    }
  }
  console.log(newString.length);
  return newString;
}
