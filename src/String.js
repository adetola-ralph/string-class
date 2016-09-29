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
    // the 'this' keyword represents the string calling the function
    return this.replace(/[a-z]/g, function(item, position, string) {
        return String.fromCharCode(string.charCodeAt(position)-32);
    });
};

String.prototype.toLower = function() {
    // the 'this' keyword represents the string calling the function
    return this.replace(/[A-Z]/g, function(item, position, string) {
        return String.fromCharCode(string.charCodeAt(position)+32);
    });
};

/**
 * Uc First
 * 
 * ucFirst capitalises the first character of its calling string
 * 
 * @param {void}
 * @return {String} returns the calling string with the first character 
 * capitalised
 */
String.prototype.ucFirst = function() {
    // get the first character
    return this.replace(/^[a-z]/g, function(item) {
        return item.toUpper();
    });
};

/**
 * Is Question
 * 
 * isQuestion checks if a string is a question. It does this by
 * checking if it contains a question mark at the end of the 
 * string
 * @param {void}
 * @return {Boolean}returns a true or false indicating if the
 * string is a question or not
 */

String.prototype.isQuestion = function() {
    return /((\?)$)/g.test(this);
}