import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherTemp from "./WeatherTemp";
import Forecast from "./Forecast";
import axios from "axios";

import "./App.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
const lookup = require('country-code-lookup')

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
      flag: `${response.data.name}, ${lookup.byIso(response.data.sys.country).country}`,
      country: (lookup.byIso(response.data.sys.country)).country, 
      link: `https://lipis.github.io/flag-icon-css/flags/4x3/${response.data.sys.country.toString().toLowerCase()}.svg`      
    });
}


function handleSubmit(event){
  event.preventDefault();
  search();
//search for a city
}

function handleCityChange(event){
  event.preventDefault();
  setCity(event.target.value);
}

function search(){
   const apiKey = "db9add1eea80b5993c21c76a9a79855d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
}

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
                  alt= {weatherData.flag}
                  title= {weatherData.flag}
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

 <WeatherTemp code={weatherData.icon} celsius={weatherData.temperature} />


      <WeatherInfo data={weatherData}/>
              
              <br />

      <Forecast />

              <div className="form-and-buttons">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder=" Pick a city..."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
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
 search();

  return "Loading...";
}
}
