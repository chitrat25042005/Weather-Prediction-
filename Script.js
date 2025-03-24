// Import necessary libraries
const axios = require('axios');

// Define the API endpoint URL
const apiEndpoint = 'https://your-weather-api.com/predict';

// Define the form submission event handler
document.getElementById('location-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the user-input location
  const location = document.getElementById('location-input').value;

  // Create a JSON payload with the location data
  const payload = {
    location: location
  };

  // Send a POST request to the API endpoint with the payload
  axios.post(apiEndpoint, payload)
    .then((response) => {
      // Get the predicted weather data from the response
      const weatherData = response.data;

      // Update the UI with the predicted weather data
      updateUI(weatherData);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Define the UI update function
function updateUI(weatherData) {
  // Get the weather container element
  const weatherContainer = document.getElementById('weather-container');

  // Clear the existing weather data
  weatherContainer.innerHTML = '';

  // Create a new HTML element for the predicted weather data
  const weatherElement = document.createElement('div');
  weatherElement.innerHTML = `
    <h2>Weather Forecast for ${weatherData.location}</h2>
    <p>Temperature: ${weatherData.temperature}°C</p>
    <p>Humidity: ${weatherData.humidity}%</p>
    <p>Weather Condition: ${weatherData.condition}</p>
  `;

  // Append the new weather element to the weather container
  weatherContainer.appendChild(weatherElement);
}
