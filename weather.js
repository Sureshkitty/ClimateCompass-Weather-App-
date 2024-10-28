const apiKey = '99294b680f74aa70b2b1dbae93a2b92c'; 
const getWeatherBtn = document.getElementById('getWeather');

getWeatherBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherInfo = document.getElementById('weatherInfo');
    const errorDiv = document.getElementById('error');

  
    cityName.textContent = '';
    temperature.textContent = '';
    description.textContent = '';
    weatherIcon.className = 'fas fa-cloud';
    errorDiv.style.display = 'none';
    weatherInfo.style.display = 'none';

   
    getWeatherBtn.disabled = true;
    getWeatherBtn.textContent = 'Loading...';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
            weatherIcon.className = `fas fa-${data.weather[0].icon}`;
            weatherInfo.style.display = 'block';
        })
        .catch(error => {
            errorDiv.textContent = error.message;
            errorDiv.style.display = 'block';
        })
        .finally(() => {
            // Re-enable button
            getWeatherBtn.disabled = false;
            getWeatherBtn.textContent = 'Get Weather';
        });
});
