let input = document.querySelector(".city");
let searchBtn = document.querySelector("#btn");
let temp1 = document.querySelector(".temp");
let temp2 = document.querySelector(".temp2");
let humidityText = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let time = document.querySelector(".time");
let cityName = document.querySelector(".city_name");
let countryName = document.querySelector(".country_name");
let weatherStatus = document.querySelector("#data_status");

let city = null;
searchBtn.addEventListener("click", function () {
  if (input.value == "") {
    alert("Enter City Name");
  } else {
    city = input.value;
  }

  cityName.textContent = city;

  let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json&utm_source=chatgpt.com`;

  let tempreture;
  let humidity;
  let windSpeed;
  let res = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let location = data.results[0];
      let latitude = location.latitude;
      let longitude = location.longitude;
      countryName.textContent = location.country || "Country unavailable";

      console.log(location);
      console.log("City: ", location.name);

      console.log("latitude :", location.latitude);
      console.log("longitude :", location.longitude);
      let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto
    `;
      return fetch(weatherURL);
    })
    .then((res) => {
      // console.log("WeatherURL", res);
      return res.json();
    })
    .then((data) => {
      console.log("Data: ", data);
      console.log("City: ", city);

      console.log(`Tempreture: ${data.current.temperature_2m}°C`);
      console.log(`Humidity:  ${data.current.relative_humidity_2m}%`);
      console.log(`Wind Speed: ${data.current.wind_speed_10m}km/h`);

      tempreture = data.current.temperature_2m;
      humidity = data.current.relative_humidity_2m;
      windSpeed = data.current.wind_speed_10m;

      weatherStatus.textContent = `Weather loaded successfully for ${city}`;

      temp1.textContent = `${tempreture}°C`;

      temp2.textContent = `${tempreture} °C`;

      humidityText.textContent = `${humidity}%`;

      wind.textContent = `${windSpeed} km/h`;
      time.textContent = data.timezone || "Unavailable";
    })
    .then(() => {
      console.log("__________");
      console.log(`Tempreture: ${tempreture}°C`);
      console.log(`Humidity:  ${humidity}%`);
      console.log(`Wind Speed: ${windSpeed}km/h`);
    })
    .catch((err) => {
      weatherStatus.textContent = `Weather for city: "${city}" not found`;
      weatherStatus.style.color = "red";
      countryName.textContent = "--";

      temp1.textContent = `--`;

      temp2.textContent = `--`;

      humidityText.textContent = `--`;

      wind.textContent = `--`;
      time.textContent = "--";
    });
});
