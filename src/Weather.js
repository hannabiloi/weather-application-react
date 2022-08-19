import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
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
    });}
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <h4>
          <FormattedDate date={weatherData.date} />
        </h4>
        <div className="row justify-content-md-center current-weather align-items-center">
          <div className="col-4">
            <span>{Math.round(weatherData.temperature)}</span>
            <a href="#" className="active" id="celsius">
              °C
            </a>
            |
            <a href="#" id="fahrenheit">
              °F
            </a>
          </div>
          <div className="col-4">
            <img
              src={weatherData.icon}
              alt={weatherData.sky}
            />
          </div>
          <div className="col-4" id="weather-sky">
            {weatherData.sky}
          </div>
        </div>
        <div className="row current-conditions">
          <div className="col-6 text-start">
            <div>
              <i className="bi bi-thermometer-high"></i>
              <span id="temp-max">{Math.round(weatherData.tempMax)}</span>°C
            </div>
            <div>
              <i className="bi bi-thermometer-low"></i>
              <span id="temp-min">{Math.round(weatherData.tempMin)}</span>
              °C
            </div>
          </div>
          <div className="col-6 text-end">
            <div>
              Wind <i className="bi bi-wind"></i>
            </div>
            <div>
              <span id="wind-speed">{weatherData.wind}</span> m/s
            </div>
          </div>
        </div>
        <hr />
        <div id="forecast"></div>
        <hr />
        <form id="change-city-form">
          <div className="row">
            <div className="col-6 align-self-center">
              <input
                type="search"
                className="form-control search"
                placeholder="City..."
                autoComplete="off"
                autoFocus="on"
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
    const apiKey = "f96a36c366f556dae54ef30478f423d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(handleResponse);
    return "Loading";
  }
}