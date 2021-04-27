import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./App.css";

export default function WeatherTemp(props) {
   const [unit, setUnit] = useState("celsius");

function showFahrenheit(event){
   event.preventDefault();
   setUnit("fahrenheit");
}

function showCelsius(event){
      event.preventDefault();
      setUnit("celsius");
}

   if (unit === 'celsius') {
   return (
<div className="row icon-temp-unit-units">
                <div className="col">
                  <WeatherIcon code={props.code} />
                </div>
               
                <div className="col">
                  <h1 className="col c-temp" id="temperature">
                    {props.celsius}
                  </h1>
                </div>
                <div className="col">
                  {" "}
                  <h5 className="c-unit" id="active-unit">
                    °C
                  </h5>
                </div>
                <div className="col units">
                  <a
                    href="https://unruffled-edison-7cdc73.netlify.app/?"
                    className="units unit celsiusLink"
                    id="celsius-link"
                    onClick={showCelsius}
                  >
                    {" "}°C{" "}
                  </a>{" "}
                  |{" "}
                  <a
                    href="/"
                    className="units unit fahrenheitLink"
                    id="fahrenheit-link"
                    onClick={showFahrenheit}
                  >
                    °F
                  </a>
                </div>
              </div>
   );
   } else {
      let fahrenheit = props.celsius * 9/5 + 32
   return (
<div className="row icon-temp-unit-units">
                <div className="col">
                  <WeatherIcon code={props.code} />
                </div>
               
                <div className="col">
                  <h1 className="col c-temp" id="temperature">
                    {Math.round(fahrenheit)}
                  </h1>
                </div>
                <div className="col">
                  {" "}
                  <h5 className="c-unit" id="active-unit">
                    °F
                  </h5>
                </div>
                <div className="col units">
                  <a
                    href="/"
                    className="units unit celsiusLink"
                    id="celsius-link"
                    onClick={showCelsius}
                  >
                    {" "}°C{" "}
                  </a>{" "}
                  |{" "}
                  <a
                    href="/"
                    className="units unit fahrenheitLink"
                    id="fahrenheit-link"
                    onClick={showFahrenheit}
                  >
                    °F
                  </a>
                </div>
              </div>
   );
   }
}