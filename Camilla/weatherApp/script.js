let baseUrl = "https://api.openweathermap.org/data/2.5/weather?appid=f622f798c072d437e128b31bea1101c5&units=metric&q="
const searchButton = document.querySelector('.searchButton');

searchButton.addEventListener('click', () => {

  const city = document.querySelector('.searchBar').value;
  console.log(city);
 
  url = baseUrl + city;
 // Make a GET request using the Fetch API
 fetch(url)
 .then((response) => {
   if (!response.ok) {
     // If the request does not return 300 OK
     throw new Error("Network response was not ok");
   }
   return response.json();
 })
 .then((data) => {
   // Pass the received data on to the function that formats it
   console.log("Data received:", data);
   getWeather(data);
 })
 .catch((error) => {
   // Handle errors
   console.error("Error:", error);
 });

})

  const weatherInfo = document.querySelector('.weatherInfo');
  const weatherAirInfo = document.querySelector('.weatherAirInfo');

  function getWeather(data) {
    weatherInfo.innerHTML = "";
    weatherAirInfo.innerHTML = "";

    const tempature = document.createElement('h2');
    tempature.classList.add("weatherTempature");
    tempature.textContent = Math.round(data.main.temp) + "°C"
    weatherInfo.appendChild(tempature);

    const wind = document.createElement('h4');
    wind.classList.add('weatherAirInfo__wind');
    wind.textContent = data.wind.speed + "km/h"
    weatherAirInfo.appendChild(wind);

    const humidity = document.createElement('h4');
    humidity.classList.add('weatherAirInfo__humidity');
    humidity.textContent = data.main.humidity + '%';
    weatherAirInfo.appendChild(humidity);

    const cityName = document.createElement('h3');
    cityName.classList.add('weatherCity');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);

  }