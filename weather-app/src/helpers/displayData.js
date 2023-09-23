export default function displayData(data, weatherIcon) {
    const app = document.getElementById("app");
  
    // Clear any previous content in the app element
    app.innerHTML = "";
  
    // Create a container for the weather information
    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weather-container");
  
    // Create elements to display weather data
    const cityName = document.createElement("h2");
    cityName.classList.add("city-name");
    cityName.textContent = `City: ${data.name}`;
  
    const temperature = document.createElement("p");
    temperature.classList.add("temperature");
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
  
    const weatherDescription = document.createElement("p");
    weatherDescription.classList.add("weather-description");
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
  
    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  
    // Create an image element for the weather icon
    const iconImage = document.createElement("img");
    iconImage.classList.add("weather-icon");
    iconImage.src = weatherIcon;
    iconImage.alt = "Weather Icon";
  
    // Append the elements to the weather container
    weatherContainer.appendChild(cityName);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(weatherDescription);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(iconImage);
  
    // Append the weather container to the app
    app.appendChild(weatherContainer);
  }