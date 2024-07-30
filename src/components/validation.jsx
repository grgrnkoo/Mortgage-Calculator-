export function validation(amount, term, rate, type) {
    const amountField = document.getElementById('amount');
    const termField = document.getElementById('term');
    const rateField = document.getElementById('rate');
    const typeField = document.querySelector('.typeField');

    let validationCounter = 0;

    if (amount === '') {
        amountField.parentNode.classList.add('error');
        validationCounter++;
        const errorText = document.createElement('span');
        if (amountField.parentElement.parentElement.childNodes.length === 2) {
            errorText.textContent = 'This field is required.'
            errorText.classList.add('errorText');
            amountField.parentElement.parentNode.appendChild(errorText);
        }
    };

    if (term === '') {
        termField.parentNode.classList.add('error');
        console.log(termField.parentNode);
        validationCounter++;
        if (termField.parentElement.parentElement.childNodes.length === 2) {
            const errorText = document.createElement('span');
            errorText.textContent = 'This field is required.'
            errorText.classList.add('errorText');
            termField.parentElement.parentNode.appendChild(errorText);
        }
    };

    if (rate === '') {
        rateField.parentNode.classList.add('error');
        validationCounter++;
        const errorText = document.createElement('span');
        if (rateField.parentElement.parentElement.childNodes.length === 2) {
            errorText.textContent = 'This field is required.'
            errorText.classList.add('errorText');
            rateField.parentElement.parentNode.appendChild(errorText);
        };
    };

    if (type === '') {
        typeField.parentNode.classList.add('error');
        validationCounter++;
        if (typeField.childNodes.length === 3) {
            const errorText = document.createElement('span');
            errorText.textContent = 'This field is required.'
            errorText.classList.add('errorText');
            typeField.appendChild(errorText);
        };
    };

    if (validationCounter === 0) {
        return true;
    } else {
        return false;
    }
}

export function removeError(element) {
    const errorMessage = element.parentNode.querySelector('.errorText');
    const errorMessageRadio = element.querySelector('.errorText');
    if (element.classList.contains('typeField') && errorMessageRadio) {
        element.removeChild(errorMessageRadio);
    }
    if (element.classList.contains('inputWrapper') && errorMessage) {
        element.parentNode.removeChild(errorMessage);
    };
    if (element.classList.contains('error')) {
        element.classList.remove('error');
        console.log(element);
    }

}