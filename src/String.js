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
 * 
 * @param {void}
 * @return {Boolean}returns a true or false indicating if the
 * string is a question or not
 */
String.prototype.isQuestion = function() {
    return /((\?)$)/g.test(this);
};

/**
 * Words
 * 
 * words returns an array of words in the calling string
 * 
 * @param {void}
 * @return {Object | Array} returns an array of strings
 */
String.prototype.words = function() {
    // tests for words that have a hyphen between them
    // like a compound name, also tests for words that
    // have an apostrophe
    let result = this.match(/(\w+([-']\w+)*)/g);

    // checks if result is null
    if(result) {
        return result;
    }

    // return an empty array if there are no words 
    // in the string
    return [];
};

/**
 * Word Count
 * 
 * wordCount returns the number of words in the string
 * 
 * @param {void}
 * @return {Number} returns the number of words in the calling
 * string
 */
String.prototype.wordCount = function() {
    return this.words().length;
};

/**
 * To Currency
 * 
 * toCurrency returns a string of digits formatted as a 
 * currency type string. Example 1111111.00 to 1,111,111.00
 * 
 * @param {void}
 * @return {String} returns the currency formatted string of 
 * its calling string
 */
String.prototype.toCurrency = function() {
    var splitString = this.split('.');

    // this regex searches for a digit that has exactly three
    // digits after it and adds a comma after the digit. $
    // makes sure the pattern starts at the end of the string.
    // ?= and {3} asserts that there are exactly three digits
    splitString[0] = splitString[0]
        .replace(/\d(?=([\d]{3})+$)/g, function(item){
        return item+',';
    });

    var result = splitString[0];

    if(splitString.length > 1) {
        // if the length of the digit after the decimal point
        // more than 2 then truncate the other digits
        splitString[1] = splitString[1].match(/(\d{1,2})/)[0];
        result = splitString.join('.');
    }

    return result; 
};

/**
 * From Currency
 * 
 * fromCurrency converts from currency formatted string to a
 * number
 * 
 * @param {void}
 * @return {Number} returns a number representing the number
 * form of it calling string.
 */
String.prototype.fromCurrency = function() {
    return Number(this.replace(/,/g, ''));
};

/**
 * Inverse Case
 * 
 * inverseCase takes its calling string and inverses the
 * cases of its characters.
 * 
 * @param {void}
 * @return {String} returns a string which is in inverse case 
 * of its calling string
 */
String.prototype.inverseCase = function() {
    var splitString = this.split('');
    var inverseSplitString = splitString.map(function(item) {
        if(/[a-z]/.test(item)) {
            return item.toUpper();
        } else if(/[A-Z]/.test(item)) {
            return item.toLower();
        }
        return item;
    });
    return inverseSplitString.join('');    
};

/**
 * Alternating Case
 * 
 * alternatingCase takes its calling string and returns it with 
 * all its characters in alternating case
 * 
 * @param {void}
 * @return{String} returns the calling string with its characters in
 * alternating cases.
 */
String.prototype.alternatingCase = function() {
    return this.replace(/[a-zA-Z]/gi, function(item, position){
        if(position%2 === 0) {
            return item.toLower();
        } else if (position%2 !== 0) {
            return item.toUpper();
        }
    });
};

/**
 * Get Middle
 * 
 * getMiddle gets its calling string. It returns the 2 middle
 * characters if the string's length is even
 * 
 * @param {void}
 * @return {String} returns the middle word(s) of the string
 */
String.prototype.getMiddle = function() {
    // split the string just after any character, the regex matches
    // null after any character(including space) in the string
    var value = this. split(/(?=)/g);

    var half = value.length / 2;
    if (value.length % 2 === 0) {
        return value.slice(half-1, half+1).join('');
    }
    return value[parseInt(half)];
};

/**
 * Number Words
 * 
 * numberWords returns the digits contained in the string
 * in their word form. For example 1 to one, 2 to two.
 * 
 * @param {void}
 * @return {String} return the word representation on the digits 
 * in the string
 */
String.prototype.numberWords = function() {
    // array of numbers in their digit form, with each number
    // the same as the index position of the array
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 
                'six', 'seven', 'eight', 'nine'];
    
    // split the string just after any character, the regex matches
    // null after any character(including space) in the string
    return this.split(/(?=)/g).map(function(item) {
        if(/\d/.test(item)) {
            return words[parseInt(item, 10)];
        }
        return item;
    }).join(' ').replace(/\s+/g, ' ');
};