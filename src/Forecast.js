import React from "react";

import "./App.css";

export default function Forecast() {
   return (
<div>
   <div>
      <div className="row forecastbox">
                <table>
                  <tbody>
                    <tr className="forecast times">
                      <td id="day00"></td>
                      <td id="day01">17h</td>
                      <td id="day02">20h</td>
                      <td id="day03">23h</td>
                      <td id="day04">2h</td>
                      <td id="day05">5h</td>
                    </tr>
                    <tr className="forecast icons">
                      <td>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
                          id="icon00"
                          alt="icon"
                        />
                      </td>
                      <td>
                        <img
                          src="https://openweathermap.org/img/wn/04n@2x.png"
                          id="icon01"
                          alt="icon"
                        />
                      </td>
                      <td>
                        <img
                          src="https://openweathermap.org/img/wn/04n@2x.png"
                          id="icon02"
                          alt="icon"
                        />
                      </td>
                      <td>
                        <img
                          src="https://openweathermap.org/img/wn/04n@2x.png"
                          id="icon03"
                          alt="icon"
                        />
                      </td>
                      <td>
                        <img
                          src="https://openweathermap.org/img/wn/04n@2x.png"
                          id="icon04"
                          alt="icon"
                        />
                      </td>
                      <td>
                        <img
                          src="https://openweathermap.org/img/wn/04n@2x.png"
                          id="icon05"
                          alt="icon"
                        />
                      </td>
                    </tr>
                    <tr className="forecast minmax">
                      <td id="minmax00">
                        Min:
                        <br />
                        Max:
                      </td>
                      <td id="minmax01">
                        18°
                        <br />
                        18°
                      </td>
                      <td id="minmax02">
                        13°
                        <br />
                        14°
                      </td>
                      <td id="minmax03">
                        11°
                        <br />
                        12°
                      </td>
                      <td id="minmax04">
                        10°
                        <br />
                        11°
                      </td>
                      <td id="minmax05">
                        8°
                        <br />
                        9°
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
   </div>
</div>
   );
}