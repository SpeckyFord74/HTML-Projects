const apiKey = "269114a7a27a95530325d6af01e1884a";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed);

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/Sun.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/Foggy.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
