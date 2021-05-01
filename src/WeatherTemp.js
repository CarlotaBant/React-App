import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./App.css";

export default function WeatherTemp(props) {

   return (
<div className="row icon-temp-unit-units">
                <div className="col">
                  <WeatherIcon code={props.code} size={52}/>
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
              </div>
   );
   } 