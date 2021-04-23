import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./App.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse (response) {
  console.log(response.data);
  setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: (Math.round(response.data.main.temp)),
      max_temp: (Math.round(response.data.main.temp_max)),
      min_temp: (Math.round(response.data.main.temp_min)),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconlink: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country.toString().toLowerCase(), 
      link: `https://lipis.github.io/flag-icon-css/flags/4x3/${response.data.sys.country.toString().toLowerCase()}.svg`      
    });
}
console.log(weatherData.country)

if(weatherData.ready) {

  return (
    <div className="Weather">
      <div className="App">
        <center>
          <div className="card">
            <div className="wrapper">
              <div className="row countryflag">
                <img
                  src= {weatherData.link}
                  alt="DE flag"
                  title="DE flag"
                  id="flag"
                />
              </div>

              <div className="row city">
                <div className="Header">
      <h3 className="col" id="city-name">
        {weatherData.city}
      </h3>
    </div>
              </div>

              <div className="row date">
                <div className="date">
      <h6 className="c-date" id="full-date">
        <FormattedDate date={weatherData.date} />
      </h6>
    </div>
              </div>

              <div className="row icon-temp-unit-units">
                <div className="col">
                  <img
                    src={weatherData.iconlink}
                    id="icon"
                    className="c-icon"
                    alt="Clear"
                  />
                </div>
                <div className="col">
                  <h1 className="col c-temp" id="temperature">
                    {weatherData.temperature}
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
                    <li className="row param max">Max:</li>
                    <li className="row param max">Min:</li>
                    <li className="row param windSpeed">Wind speed:</li>
                    <li className="row param humidity">Humidity:</li>
                  </ul>
                </div>

                <div className="column current-data">
                  <ul className="information">
                    <li className="text-capitalize row info description" id="description">
                      {weatherData.description}
                    </li>
                    <li className="row info c-max-min" id="max">
                      {weatherData.max_temp}°
                    </li>
                    <li className="row info c-min-min" id="min">
                      {weatherData.min_temp}°
                    </li>
                    <li className="row info windSpeed" id="wind">
                      {weatherData.wind} km/h
                    </li>
                    <li className="row info humidity" id="hum">
                      {weatherData.humidity}%
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
          href="https://github.com/CarlotaBant/React-App"
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
} else { 
  const apiKey = "db9add1eea80b5993c21c76a9a79855d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  console.log(apiUrl);

  axios.get(apiUrl).then(handleResponse);


  return "Loading...";
}
}
