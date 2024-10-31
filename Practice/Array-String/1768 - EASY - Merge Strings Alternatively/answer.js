/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
export var mergeAlternately = function(word1, word2) {

    let length = 0;
    word1.length > word2.length ? length = word1.length : length = word2.length;

    let mergeWord = '';

    for(var i = 0; i < length; i++){
        if(word1[i]){
            mergeWord = mergeWord + word1[i]
        }
        if(word2[i]){
            mergeWord = mergeWord + word2[i]
        }
    }

    return mergeWord
};
