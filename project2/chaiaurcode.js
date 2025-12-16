const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `<span>Enter a valid height</span>`;
    }  
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `<span>Enter a valid weight</span>`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
});
