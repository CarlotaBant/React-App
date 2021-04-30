import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./App.css";

export default function WeatherTemp(props) {
   const [unit, setUnit] = useState("°C");
   const [temp, setTemp] = useState(Math.round(props.celsius))

function showFahrenheit(event){
   event.preventDefault();
   setTemp(Math.round((props.celsius) * 9/5 + 32));
   setUnit("°F");
}

function showCelsius(event){
      event.preventDefault();
      setTemp(props.celsius);
      setUnit("°C");
}

   return (
<div className="row icon-temp-unit-units">
                <div className="col">
                  <WeatherIcon code={props.code} size={52}/>
                </div>
               
                <div className="col">
                  <h1 className="col c-temp" id="temperature">
                    {temp}
                  </h1>
                </div>
                <div className="col">
                  {" "}
                  <h5 className="c-unit" id="active-unit">
                    {unit}
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
   } 