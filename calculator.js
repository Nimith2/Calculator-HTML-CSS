let currentInput = '';
let isResultShown = false;

function appendToDisplay(value) {
    if (isResultShown) {
        document.getElementById('display').value = '';
        isResultShown = false;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
        isResultShown = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
