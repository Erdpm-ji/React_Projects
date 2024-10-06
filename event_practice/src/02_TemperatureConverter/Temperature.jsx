import React, { useState } from 'react';

function Temperature() {
  // State to store temperature input and the selected scale
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');
  const [error, setError] = useState(''); // For input validation errors

  // Function to handle temperature input changes
  const handleTemperatureChange = (e) => {
    const value = e.target.value;
    
    // Validate if the input is a number or an empty string
    if (isNaN(value) && value !== '') {
      setError('Please enter a valid number');
    } else {
      setError('');
      setTemperature(value);
    }
  };

  // Function to handle scale selection (Celsius/Fahrenheit)
  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  // Function to perform temperature conversion
  const convertTemperature = () => {
    const temp = parseFloat(temperature);

    if (isNaN(temp)) {
      return '';
    }

    if (scale === 'Celsius') {
      return ((temp * 9) / 5 + 32).toFixed(2) + ' °F';
    } else {
      return (((temp - 32) * 5) / 9).toFixed(2) + ' °C';
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Temperature Converter</h1>

      <div>
        <label>
          Enter temperature:
          <input 
            type="text" 
            value={temperature} 
            onChange={handleTemperatureChange} 
          />
        </label>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>
          Select scale:
          <select value={scale} onChange={handleScaleChange}>
            <option value="Celsius">Celsius to Fahrenheit</option>
            <option value="Fahrenheit">Fahrenheit to Celsius</option>
          </select>
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Converted Temperature: {convertTemperature()}</h2>
      </div>
    </div>
  );
}

export default Temperature;
