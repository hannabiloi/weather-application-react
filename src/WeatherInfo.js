import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row justify-content-md-center current-weather align-items-center">
        <div className="col-4">
          <h2>{props.data.city}</h2>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
        </div>
        <div className="col-4 text-end">
          <span className="unit">{Math.round(props.data.temperature)} </span>
          <span className="units">°C</span>
        </div>
        <div className="col-4 text-end WeatherIcon">
          <img src={props.data.icon} alt={props.data.sky} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 text-start">
          <div>
            <i className="fa-solid fa-temperature-high"></i>
            <span id="temp-max"> {Math.round(props.data.tempMax)}</span>°C
          </div>
          <div>
            <i class="fa-solid fa-temperature-low"></i>
            <span id="temp-min"> {Math.round(props.data.tempMin)}</span>
            °C
          </div>
        </div>
        <div className="col-6 text-end">
          <div>
            <div>{props.data.sky}</div>
          </div>
          <div>
            <i class="fa-solid fa-wind"></i>
            <span id="wind-speed"> {props.data.wind}</span> m/s
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
