import React from "react";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();
        let days = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ];
        return days[day]
    }
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <div className="WeatherForecast-icon">
          <img
            src={`images/${props.data.weather[0].icon}.png`}
            alt={props.data.weather[0].sky}
          />
        </div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temp-max">
            {Math.round(props.data.temp.day)}°{" "}
          </span>
          <span className="WeatherForecast-temp-min">
             {Math.round(props.data.temp.night)}°
          </span>
        </div>
      </div>
    );
}