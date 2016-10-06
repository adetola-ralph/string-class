function callMethod(text, method) {
    return text[method]();
}

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
