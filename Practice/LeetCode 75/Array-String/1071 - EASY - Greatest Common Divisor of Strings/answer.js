/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export var gcdOfStrings = function (str1, str2) {

    // find out which string is the longest
    let shortest = '';
    let longest = '';
    if (str1.length > str2.length) {
        longest = str1;
        shortest = str2;
    } else {
        longest = str2;
        shortest = str1;
    }

    // iterate through the length of the shortest one until you find a prefix that divides each string
    let prefix = '';
    let gcd = '';
    for (var i = 0; i < shortest.length; i++) {
        prefix = shortest.slice(0, i + 1);
        let multipleLongest = longest.length / prefix.length;
        let multipleShortest = shortest.length / prefix.length;
        // if the multiple exists for the longest and the shortest string at the same time, return the prefix divisor
        // if the modulus of the prefix is not zero for each string, skip it
        if ((longest.length % prefix.length) === 0 && (shortest.length % prefix.length) === 0) {
            // if the multiple exists for the longest and the shortest string at the same time, return the prefix divisor
            if (multipleExists(prefix, multipleLongest, longest) && multipleExists(prefix, multipleShortest, shortest)) {
                gcd = prefix;
            }

        }
    }
    return gcd;
};


// check if prefix 'multiple' times equals the string
function multipleExists(prefix, multiple, string) {
    let concat = '';
    for (var i = 1; i <= multiple; i++) {
        concat = concat + prefix;
    }

    // return prefix;
    if (concat === string) {
        return true;
    } else {
        return false;
    }
}