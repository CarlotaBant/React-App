

const apiKey = "db9add1eea80b5993c21c76a9a79855d";
const part = `current, minutely, hourly, alerts`
const lat = 40.4
const lon = 70
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid={API key}`
console.log(apiUrl)
