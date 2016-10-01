document.getElementById('submit').onclick = function(e) {
    var textValue = document.getElementById('input-text').value;
    var stringMethod = document.getElementById('string-method').value;
    var htmlResult = document.getElementById('result');

    if (textValue.length === 0) {
         htmlResult.innerText = 'Please enter text';
    } else {
         htmlResult.innerText = callMethod(textValue, stringMethod);
    }

    e.preventDefault();
}

function callMethod(text, method) {
    switch (method) {
        case '0':
            return text.hasVowels();
        case '1':
            return text.toUpper();
        case '2':
            return text.toLower();
        case '3':
            return text.ucFirst();
        case '4':
            return text.isQuestion();
        case '5':
            return text.words();
        case '6':
            return text.wordCount();
        case '7':
            return text.toCurrency();
        case '8':
            return text.fromCurrency();
        case '9':
            return text.inverseCase();
        case '10':
            return text.alternatingCase();
        case '11':
            return text.getMiddle();
        case '12':
            return text.numberWords();
        case '13':
            return text.isDigit();
        case '14':
            return text.doubleCheck();
        default:
            return 'no such method';
    }
}