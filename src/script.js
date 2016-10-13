function callMethod(text, method) {
    return text[method]();
}

var form = document.querySelector("#form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var textValue = formData.get('input-text');
    var stringMethod = formData.get('string-method');
    var htmlResult = document.querySelector('#result');

    if (textValue.length === 0) {
        htmlResult.innerText = 'Please enter text';
    } else {
        htmlResult.innerText = callMethod(textValue, stringMethod);
    }
});
