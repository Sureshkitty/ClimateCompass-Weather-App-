🌤️ ClimateCompass — Weather Forecast App

A sleek and responsive weather application delivering real-time forecasts, radar visuals, and helpful climate insights in a user-friendly interface.
📋 Table of Contents

    📍 Overview

    ✨ Features

    🛠️ Tech Stack

    ⚙️ Setup & Installation

    🚀 Usage

    📁 Project Structure

    🔍 APIs & Data Sources

    🙌 Credits & Acknowledgements

    📄 License

📍 Overview

ClimateCompass provides users with accurate and easy-to-read weather forecasts for their chosen locations. Key offerings include:

    🌡️ Hourly & 7-day forecasts

    🌦️ Current conditions (temperature, humidity, wind, UV index)

    📈 Chance-of-rain indicators

    🗺️ Interactive radar maps (optional)

    🌇 Sunrise/sunset times

All wrapped in a clean, responsive design ideal for web and mobile.
✨ Features

    📆 Hourly & daily forecast views

    🧭 Geolocation support — auto-detect your city

    🔍 Manual search for city weather

    🌈 Toggle between °C / °F

    🗺️ Embedded radar or weather maps

    💾 Favorites list for quick access

🛠️ Tech Stack
Layer	🔧 Technologies
Frontend	React / Vue.js / Angular / Next.js
State	Redux / Vuex / Context API
HTTP Requests	Axios / Fetch API
Styling	Tailwind CSS / Bootstrap / Sass
Weather APIs	OpenWeatherMap / WeatherAPI.com / MET Norway
Map / Radar	Leaflet.js / Mapbox GL JS / Google Maps API
⚙️ Setup & Installation

    Clone the repo

git clone https://github.com/Sureshkitty/ClimateCompass-Weather-App-.git
cd ClimateCompass-Weather-App-

Install dependencies

cd client
npm install

Configure environment variables
Create a .env file in the client folder:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Run the development server

npm start

(Optional) Build for production

    npm run build

🚀 Usage

    Visit http://localhost:3000 after starting the server

    Allow location access or search by city name

    View current weather, see a 7-day forecast, toggle units, and enjoy radar visuals

    Add cities to favorites for easy access

📁 Project Structure

ClimateCompass/
├── client/
│   ├── public/
│   └── src/
│       ├── components/      # UI components (ForecastCard, SearchBar, MapView)
│       ├── pages/           # Main views (Home, Favorites)
│       ├── services/        # API calls (weather, geolocation)
│       ├── contexts/        # State management
│       ├── styles/          # Global CSS or stylesheets
│       └── App.js
├── .env                   # API key file (not committed)
└── README.md

🔍 APIs & Data Sources

    🔑 Uses OpenWeatherMap API for current and forecast data

    🗺️ (Optional) Integrates Mapbox / Leaflet.js for dynamic radar visuals

    🌐 Geolocation support using [navigator.geolocation] API

🙌 Credits & Acknowledgements

    Weather providers: OpenWeatherMap, WeatherAPI.com

    Map resources: Leaflet, Mapbox, OpenStreetMap

    Stack: Built with React, Axios, Tailwind CSS

    Inspired by weather apps like Dark Sky and Weather Underground

    Thanks to open-source contributors for components and tutorials

📄 License

📝 Licensed under the MIT License. See the LICENSE file for details.
🤝 How to Contribute

    🍴 Fork the repo

    🔀 Create a feature branch:

git checkout -b feature/YourFeature

🛠️ Make your changes and commit:

git commit -m "Add awesome feature"

🚀 Push:

git push origin feature/YourFeature

🔁 Open a Pull Request with a detailed description
