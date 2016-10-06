# String Class

## About this Repo
This repository contains an extension of the String base class. New functions were added to the String prototype object to make it more robust.


## How to use
To make use of the added functions, download the `String.js` files from the `src` folder of this repo and add a link to it in your `html` file as shown below.
```html
<!--Somewhere in the head of your webpage-->
<script src = ".\String.js"></script>
```

## Additional Functions
#### The following functions have been added to the `String` prototype.
1. **hasVowels** _(returns Boolean)_: Returns `true` if the string contains vowels and `false` if not.

2. **toUpper** _(returns String)_: Returns the calling string with all characters in uppercase.

3. **toLower** _(returns String)_: Returns the caling string with all characters in their lowercase.

4. **ucFirst** _(returns String)_: Returns the calling string but changes the first character to uppercase.

5. **isQuestion** _(returns Boolean)_: Returns `true` if the calling string is a question (ending with a question mark) or `false` if not.

6. **words** _(returns Object, instanceof Array)_: Returns an array of the words in the string.

7. **wordCount** _(returns Number)_: Returns the number of words in the string.

8. **toCurrency** _(returns String)_: Returns a currency representation of the calling string e.g `12345.67` is represented as `12,345.67`.

9. **fromCurrency** _(returns Number)_: Returns a number representation of the calling string e.g `12,345.67` returns `12345.67`.

10. **inverseCase** _(returns String)_: Returns each character in the string as an inverse of its current case e.g `Mr. Ben` would return `mR. bEN`.

11. **alternatingCase** _(returns String)_: Returns the characters of the calling string in alternating cases starting with a lowercase character. e.g `Onomatopoeia` would return `oNaMaToPoEiA`.

12. **getMiddle** _(returns String)_: Returns the character(s) in the middle of the calling string e.g `read` would return `ea` and `reads` would return `a`.

13. **numberWords** _(returns String)_: Returns the numbers in the calling string e.g `123` would return `one two three`.

14. **isDigit** _(returns Boolean)_: Returns true if the string is a digit(one number) e.g `3` would return `true` and `34` would return false.

15. **doubleCheck** _(returns Boolean)_: Returns true if the calling string contains double characters e.g `aa`, `!!`, should return true.
