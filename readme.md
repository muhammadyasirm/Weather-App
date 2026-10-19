# 🌦️ Weather App

A simple and interactive Weather App built using **HTML, CSS, and JavaScript**. It allows users to search for any city and view its current weather information through the Open-Meteo API.

The project demonstrates how to fetch data from external APIs, handle asynchronous operations using JavaScript Promises, and dynamically update webpage content using the DOM.

## ✨ Features

- 🔍 **City Search:** Search for weather information by entering a city name.
- 🌡️ **Current Temperature:** View the current temperature in Celsius.
- 💧 **Humidity:** Check the current relative humidity percentage.
- 🌬️ **Wind Speed:** View wind speed in km/h.
- 🌍 **Country Information:** Display the country associated with the searched city.
- 🕒 **Time Zone:** Display the city's timezone.
- 🎨 **Clean User Interface:** A modern design with a blue gradient background and weather-related icons.
- ⚡ **Live API Data:** Fetch current weather information from the Open-Meteo API.
- ⚠️ **Error Handling:** Display status messages when weather data cannot be retrieved.

## 🛠️ Technologies Used

- **HTML5** — Structures the application.
- **CSS3** — Styles the interface, layout, colors, and weather information cards.
- **JavaScript (ES6+)** — Handles user interactions, API requests, and dynamic content updates.
- **Open-Meteo API** — Provides geocoding and current weather data.
- **Font Awesome** — Provides icons for weather conditions and weather details.

## 🌐 APIs Used

This project uses two Open-Meteo endpoints:

### 1. Geocoding API

Converts the entered city name into geographical coordinates, including latitude and longitude.

https://geocoding-api.open-meteo.com/v1/search

### 2. Weather Forecast API

Uses the coordinates to retrieve current weather information, including temperature, relative humidity, wind speed, and timezone.

https://api.open-meteo.com/v1/forecast

The application uses the following weather parameters:

- `temperature_2m`
- `relative_humidity_2m`
- `wind_speed_10m`
- `timezone=auto`

## 📂 Project Structure

```text
weather-app/
│
├── index.html       # Application structure
├── style.css        # Styling and layout
├── script.js        # API integration and functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

You need a modern web browser and a code editor such as Visual Studio Code.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/weather-app.git
```

**2. Open the project folder**

```bash
cd weather-app
```

**3. Open the application**

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

**4. Search for a city**

Enter a city name in the search field and click the **Search** button to view its weather information.

> Replace `YOUR-USERNAME` with your GitHub username in the clone command.

## ⚙️ How It Works

1. The user enters a city name.
2. JavaScript sends a request to the Open-Meteo Geocoding API.
3. The API returns the city's geographical coordinates and location details.
4. JavaScript uses the latitude and longitude to request current weather data.
5. The application extracts the temperature, humidity, wind speed, and timezone.
6. The DOM is updated to display the retrieved information on the webpage.
7. If a request fails or the city cannot be found, an error message is displayed.

## 📚 What I Learned

While building this project, I practiced:

- Working with third-party APIs using JavaScript's `fetch()`.
- Understanding asynchronous JavaScript and Promise chaining with `.then()` and `.catch()`.
- Handling JSON responses from APIs.
- Selecting and updating HTML elements using DOM manipulation.
- Using event listeners to handle user interactions.
- Working with latitude and longitude to retrieve location-specific data.
- Implementing basic error handling for API requests.
- Organizing a frontend project into separate HTML, CSS, and JavaScript files.

## 🔮 Future Improvements

Possible improvements for future versions include:

- Add weather condition icons based on actual weather codes.
- Display weather-specific backgrounds or illustrations.
- Support searching by pressing the Enter key.
- Improve input validation and handle invalid city names.
- Add a loading indicator while fetching data.
- Make the layout fully responsive across mobile, tablet, and desktop screens.
- Display additional weather information and forecasts.

## 👨‍💻 Author

**Muhammad Yasir**

BS Computer Science Student | Aspiring Full-Stack Developer

- GitHub: [Muhammad Yasir](https://github.com/muhammadyasirm)
- LinkedIn: [YOUR-LINKEDIN-PROFILE](https://www.linkedin.com/)

## 📄 Data Source

Weather data is provided by [Open-Meteo](https://open-meteo.com/).

Geocoding and weather information are retrieved through the Open-Meteo APIs. Please review the provider's terms and attribution requirements before distributing the application.

---

⭐ If you find this project useful, consider giving the repository a star!

**Built with ❤️ by Muhammad Yasir**
