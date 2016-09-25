/**
 * Has Vowels
 * 
 * hasVowel tests if the String calling the function has a vowels
 * 
 * @param {void}
 * @return {Boolean} returns true or false indicating if the string
 * has a vowel or not
 */
String.prototype.hasVowels = function() {
    var inputString = this;
    return /[aeiou]/gi.test(inputString);
};

/**
 * To Upper
 * 
 * toUpper converts its calling string to all uppercase characters
 * 
 * @param {void}
 * @return {String} returns an upperCase version of the calling string
 */
String.prototype.toUpper = function() {
    var inputString = this;
    var lowerCasePattern = /[a-z]/g;

    return inputString.replace(lowerCasePattern, function(item, position, string) {
        return String.fromCharCode(string.charCodeAt(position)-32);
    });
};