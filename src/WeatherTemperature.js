import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="unit">{Math.round(props.celsius)} </span>
        <span className="units">
          °C |
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="unit">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
