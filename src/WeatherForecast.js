import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css"
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);


function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}


if (loaded) {

return (
 <div class-name="WeatherForecast">
   <div className="row">
      <div className="col">
        <div className="WeatherForecast-day">Thu</div>
        <WeatherIcon code="01d" size={32}/>
        <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">19°</span>{" "}
        <span className="WeatherForecast-temperature-min">10°</span>

        </div>
      </div>
   </div>
    <WeatherForecastDay data={forecast[0]} />
</div>
);

} else {

let apiKey = "db9add1eea80b5993c21c76a9a79855d";
let part = `current,minutely,hourly,alerts`
let lat = props.coordinates.lat
let lon = props.coordinates.lon
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=metric`
console.log (apiUrl);
axios.get(apiUrl).then(handleResponse);

return "Loading forecast...";

} 
}