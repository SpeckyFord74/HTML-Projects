// Get the HTML elements for the joke container and the button
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// Define the API URL for fetching jokes
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

// Define an asynchronous function to fetch and display a joke
async function getJoke() {
  // Send a GET request to the API URL
  const response = await fetch(url);

  // Parse the response data as JSON
  var data = await response.json();
  console.log(data); // Log the response data for debugging purposes

  // Update the joke container with the fetched joke
  jokeContainer.innerHTML = data.joke;
}

// Add an event listener to the button to call the getJoke function on click
btn.addEventListener("click", getJoke);
