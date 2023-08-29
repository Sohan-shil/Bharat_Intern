// Get the necessary elements
const inputTemp = document.getElementById('inputTemp');
const inputUnit = document.getElementById('inputUnit');
const convertUnit = document.getElementById('convertUnit');
const convertedTemp = document.getElementById('convertedTemp');
const convertBtn = document.getElementById('convertBtn');

// Add event listener to the Convert button
convertBtn.addEventListener('click', () => {
    // Get the input temperature and units
    const temperature = parseFloat(inputTemp.value);
    const fromUnit = inputUnit.value;
    const toUnit = convertUnit.value;

    // Check if the input temperature is a valid number
    if (!isNaN(temperature)) {
        // Convert temperature based on selected units
        let convertedTemperature = 0;
        if (fromUnit === '°C' && toUnit === '°F') {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (fromUnit === '°F' && toUnit === '°C') {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (fromUnit === '°C' && toUnit === 'K') {
            convertedTemperature = temperature + 273.15;
        } else if (fromUnit === '°F' && toUnit === 'K') {
            convertedTemperature = (temperature + 459.67) * 5/9;
        } else if (fromUnit === 'K' && toUnit === '°C') {
            convertedTemperature = temperature - 273.15;
        } else if (fromUnit === 'K' && toUnit === '°F') {
            convertedTemperature = (temperature * 9/5) - 459.67;
        } else {
            convertedTemperature = temperature; // No conversion needed
        }

        // Display the converted temperature
        convertedTemp.textContent = convertedTemperature.toFixed(2) + ' ' + toUnit;
    } else {
        // Display an error message if input is not a valid number
        convertedTemp.textContent = 'Invalid input';
    }
});
