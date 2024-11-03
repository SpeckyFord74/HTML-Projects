// API Key for OpenWeatherMap API
const apiKey = "Your API Key";

// Base URL for OpenWeatherMap API
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selectors for search box, search button, and weather icon
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
  // Construct the API request URL
  const response = await fetch(url + city + `&appid=${apiKey}`);

  // Check if the response was successful
  if (response.status == 404) {
    // Display error message if city not found
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // Parse the JSON response
    var data = await response.json();

    // Log the response data for debugging
    console.log(data);

    // Update the UI with the weather data
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed);

    // Update the weather icon based on the weather condition
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/Sun.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/Foggy.png";
    }

    // Hide error message and display weather data
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

// Add event listener to search button
searchButton.addEventListener("click", () => {
  // Call the checkWeather function with the search box value
  checkWeather(searchBox.value);
});
