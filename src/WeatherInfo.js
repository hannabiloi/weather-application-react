import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <h4>
          <FormattedDate date={props.data.date} />
        </h4>
        <div className="row justify-content-md-center current-weather align-items-center">
          <div className="col-4">
              <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <img src={props.data.icon} alt={props.data.sky} />
          </div>
          <div className="col-4" id="weather-sky">
            {props.data.sky}
          </div>
        </div>
        <div className="row current-conditions">
          <div className="col-6 text-start">
            <div>
              <i className="bi bi-thermometer-high"></i>
              <span id="temp-max">{Math.round(props.data.tempMax)}</span>°C
            </div>
            <div>
              <i className="bi bi-thermometer-low"></i>
              <span id="temp-min">{Math.round(props.data.tempMin)}</span>
              °C
            </div>
          </div>
          <div className="col-6 text-end">
            <div>
              Wind <i className="bi bi-wind"></i>
            </div>
            <div>
              <span id="wind-speed">{props.data.wind}</span> m/s
            </div>
          </div>
        </div>
        <hr />
        <div id="forecast"></div>
        <hr />
      </div>
    );
}