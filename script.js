let calculatorOn = false;
let lightTimer;

function toggleCalculator() {
    calculatorOn = !calculatorOn;
    const onOffBtn = document.getElementById('on-off-btn');
    const indicatorLight = document.getElementById('indicator-light');
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.cal-btn'); // Fixed selector

    if (calculatorOn) {
        indicatorLight.style.backgroundColor = 'green';
        resultInput.disabled = false;
        resultInput.placeholder = 'Calculator On'; // Add this line
        buttons.forEach(button => button.disabled = false);
        clearTimeout(lightTimer);
    } else {
        indicatorLight.style.backgroundColor = 'red';
        resultInput.value = '';
        resultInput.disabled = true;
        resultInput.placeholder = 'Calculator Off'; // Add this line
        buttons.forEach(button => button.disabled = true);

        lightTimer = setTimeout(() => {
            indicatorLight.style.backgroundColor = 'grey';
        }, 30000); // 30 seconds
    }
}

function input(value) {
    if (!calculatorOn) return;
    const result = document.getElementById('result');
    
    // Clear Even/Odd message if any
    if (result.value === 'Even' || result.value === 'Not Even' || result.value === 'Odd' || result.value === 'Not Odd') {
        result.value = '';
    }
    
    result.value += value;
}

function cancel() {
    if (!calculatorOn) return;
    document.getElementById('result').value = '';
}

function calc() {
    if (!calculatorOn) return;
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}

function even() {
    if (!calculatorOn) return;
    const result = document.getElementById('result');
    const value = parseInt(result.value);
    if (!isNaN(value)) {
        result.value = (value % 2 === 0) ? 'Even' : 'Not Even';
    }
}

function odd() {
    if (!calculatorOn) return;
    const result = document.getElementById('result');
    const value = parseInt(result.value);
    if (!isNaN(value)) {
        result.value = (value % 2 !== 0) ? 'Odd' : 'Not Odd';
    }
}
