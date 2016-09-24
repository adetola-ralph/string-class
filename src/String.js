String.prototype.hasVowels = function() {
    var inputString = this;
    return /[aeiou]/gi.test(inputString);
}