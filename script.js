async function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "2919d6658b61b431a0b3900156448628" ;  // Replace with your OpenWeather API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);  // Fetch data from API
        let data = await response.json();  

        if (data.cod === "404") {
            document.getElementById("weather-result").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weather-result").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById("weather-result").innerHTML = "Something went wrong!";
    }
}
