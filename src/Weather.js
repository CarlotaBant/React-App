import React from "react";

import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    temperature: 17,
    date: "Wed, 31 March 22:22",
    description: "scattered clouds",
    imgUrl: "https://openweathermap.org/img/wn/04n@2x.png",
    humidity: 42,
    wind: 8
  };

  return (
    <div className="Weather">
      <div className="App">
        <center>
          <div className="card">
            <div className="wrapper">
              <div className="row countryflag">
                <img
                  src="https://www.countryflags.io/de/shiny/64.png"
                  alt="DE flag"
                  title="DE flag"
                  id="flag"
                />
              </div>

              <div className="row city">
                <div className="Header">
      <h3 className="col" id="city-name">
        Berlin
      </h3>
    </div>
              </div>

              <div className="row date">
                <div className="date">
      <h6 className="c-date" id="full-date">
        {weatherData.date}
      </h6>
    </div>
              </div>

              <div className="row icon-temp-unit-units">
                <div className="col">
                  <img
                    src="https://openweathermap.org/img/wn/04n@2x.png"
                    id="icon"
                    className="c-icon"
                    alt="Clear"
                  />
                </div>
                <div className="col">
                  <h1 className="col c-temp" id="temperature">
                    17
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
                    href="https://admiring-lumiere-9fbda6.netlify.app/"
                    className="units unit celsiusLink"
                    id="celsius-link"
                  >
                    °C
                  </a>{" "}
                  |
                  <a
                    href="https://admiring-lumiere-9fbda6.netlify.app/"
                    className="units unit fahrenheitLink"
                    id="fahrenheit-link"
                  >
                    °F
                  </a>
                </div>
              </div>

              <div className="row" id="other-info">
                <div className="column" id="parameters">
                  <ul className="parameters">
                    <li className="row param description">Today:</li>
                    <li className="row param max">Min:</li>
                    <li className="row param max">Max:</li>
                    <li className="row param windSpeed">Wind speed:</li>
                    <li className="row param humidity">Humidity:</li>
                  </ul>
                </div>

                <div className="column current-data">
                  <ul className="information">
                    <li className="row info description" id="description">
                      scattered clouds
                    </li>
                    <li className="row info c-max-min" id="min">
                      17°
                    </li>
                    <li className="row info c-max-min" id="max">
                      8°
                    </li>
                    <li className="row info windSpeed" id="wind">
                      8.23 km/h
                    </li>
                    <li className="row info humidity" id="hum">
                      42%
                    </li>
                  </ul>
                </div>
              </div>

              <br />

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

              <div className="form-and-buttons">
                <form>
                  <input
                    type="search"
                    id="pickCity"
                    placeholder=" Pick a city..."
                  />

                  <div className="row buttons">
                    <input
                      type="submit"
                      value="search"
                      className="column but1"
                      id="search-city"
                    ></input>

                    <button
                      type="button"
                      className="column but2"
                      id="current-location"
                    >
                      current
                    </button>
                  </div>
                </form>
              </div>

              <div>
      <p className="byLota">
        <a
          className="linkLotaOpeSource"
          href="https://github.com/CarlotaBant/Weather-App"
          target="blank"
          rel="nonreferrer"
        >
          Open-source code
        </a>{" "}
        by Lota Aya
      </p>
    </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
