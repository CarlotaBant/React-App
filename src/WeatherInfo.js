import React from "react";

import "./App.css";

export default function WeatherInfo(props) {
   return (
   <div>
      <div className="row description">
        {props.data.description}
      </div>
      <div className="row description">

      </div>
      <div className="row" id="other-info">

                <div className="column" id="parameters">
                    <ul className="parameters">
                        <li className="row param maxMin">Range:</li>
                        <li className="row param windSpeed">Wind speed:</li>
                        <li className="row param humidity">Humidity:</li>
                    </ul>
                </div>

                <div className="column current-data">
                  <ul className="information">
                    <li className="row info maxMin" id="wind">
                      {props.data.min_temp} to {props.data.max_temp}°
                    </li>
                    <li className="row info windSpeed" id="wind">
                        {Math.round(props.data.wind)} km/h
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