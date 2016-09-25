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

String.prototype.toUpper = function() {
    return "";
};