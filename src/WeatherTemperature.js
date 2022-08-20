import React, { useState } from "react";

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
        °C |
        <a href="/" onClick={showFahr}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="unit">{Math.round(fahrenheit)}</span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>
        | °F
      </div>
    );
  }
}
