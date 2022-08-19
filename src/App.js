import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Kyiv"/>
        <footer>
          This project was coded by Hanna Biloi and is{" "}
          <a
            href="httfooters://github.com/hannabiloi/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
