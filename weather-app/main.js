import './style.css'
import fetchData from './src/helpers/fetchData';
import displayData from './src/helpers/displayData';

async function main(loc= "Manila") {
  const location = loc;
  const apiKey = "e9f13c05bdfadae6644e15e83e99a64d";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const data = await fetchData(weatherApiUrl);

  // Extract the weather icon code from the API response
  const weatherIconCode = data.weather[0].icon;

  // Construct the weather icon URL
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;

  displayData(data, weatherIcon);
}

main("cebu");