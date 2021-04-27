import React from "react";

import "./App.css";

export default function WeatherInfo(props) {
   return (
   <div>
      <div className="row" id="other-info">
                <div className="column" id="parameters">
                  <ul className="parameters">
                    <li className="row param description">Today:</li>
                    <li className="row param max">Max:</li>
                    <li className="row param max">Min:</li>
                    <li className="row param windSpeed">Wind speed:</li>
                    <li className="row param humidity">Humidity:</li>
                  </ul>
                </div>

                <div className="column current-data">
                  <ul className="information">
                    <li className="capitalized-text row info description" id="description">
                      {props.data.description}
                    </li>
                    <li className="row info c-max-min" id="max">
                      {props.data.max_temp}°
                    </li>
                    <li className="row info c-min-min" id="min">
                      {props.data.min_temp}°
                    </li>
                    <li className="row info windSpeed" id="wind">
                      {props.data.wind} km/h
                    </li>
                    <li className="row info humidity" id="hum">
                      {props.data.humidity}%
                    </li>
                  </ul>
                </div>
              </div>

   </div>
   );
}