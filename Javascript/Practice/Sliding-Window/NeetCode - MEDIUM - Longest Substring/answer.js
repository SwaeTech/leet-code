function lengthOfLongestSubstring(s) {
    let word = s.split("");
    let returnString = "";

    for (let i = 0; i < word.length; i++){
        let charDict = {};
        let pointer = i;
        let subString = "";
        while (!charDict[word[pointer]] && pointer < word.length){
            console.log(pointer);
            console.log(charDict[word[pointer].toString()]);
            charDict[word[pointer]] = word[pointer];
            subString += word[pointer];
            pointer++;
        }
        console.log(charDict);
        // charDict gets overwritten every time
        if (subString.length > returnString.length){
            returnString = subString;
        }
    }

    return returnString; // Return the substring itself
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Should output "abc"