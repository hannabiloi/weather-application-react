import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      wind: response.data.wind.speed,
      sky: response.data.weather[0].description,
      icon: `images/${response.data.weather[0].icon}.png`,
    });
  }
  function search () {
    const apiKey = "f96a36c366f556dae54ef30478f423d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(handleResponse);
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleCityChange(event) {
      setCity(event.target.value)
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 align-self-center">
              <input
                type="search"
                className="form-control search"
                placeholder="City..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-6 align-self-center">
              <button type="button" className="btn btn-outline-dark">
                Search
              </button>
              <button type="button" className="btn btn-outline-dark">
                Current city
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
      search()
    return "Loading";
  }
}
