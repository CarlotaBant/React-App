import React, {useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css"
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}


if (loaded) {

return (
 <div class-name="WeatherForecast">
   <div className="row WeatherForecast-box">
     {forecast.map((dailyForecast, index) => {
         if (index > 0 && index < 6) {
           return (
             <div className="col" key={index}>
               <WeatherForecastDay data={dailyForecast} />
             </div>
           );
         }
       })}
   </div>
</div>
);

} else {

let apiKey = "db9add1eea80b5993c21c76a9a79855d";
let part = `current,minutely,hourly,alerts`
let lat = props.coordinates.lat;
let lon = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=metric`
console.log (apiUrl);
axios.get(apiUrl).then(handleResponse);

return "Loading forecast...";

} 
}