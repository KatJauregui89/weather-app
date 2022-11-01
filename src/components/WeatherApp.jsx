import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WeatherApp = () => {

    const [weather, setweather] = useState({})
    const [isCelsius, setIsCelsius] = useState(true)

    useEffect(() => {

        const success = pos => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d79c51daf7a30820d6fd362447a0612`).then(res => setweather(res.data))
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    console.log(weather);

    return (
        <div className='card'>
            <h1>Weather App</h1>
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <img src={` http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            <p>{isCelsius ? parseFloat(weather.main?.temp - 273.15).toFixed(2) : parseFloat(((weather.main.temp - 273.15) * 1.8) + 32).toFixed(2)} {isCelsius ? "℃" : "℉"} </p>
            <p>{weather.weather?.[0].description}</p>
            <p>{weather.wind?.speed} m/s</p>
            <button onClick={() => setIsCelsius(!isCelsius)}> {isCelsius ? "Change to Fahrenheit" : "Change to Celsius"} </button>
        </div>
    );
};

export default WeatherApp;