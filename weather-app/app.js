const request = require('postman-request');
require('dotenv').config()

const weatherStackUrl = `${process.env.WEATHERSTACK_BASE_URL}/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=37.8267,-122.4233&units=f`;

request({ url: weatherStackUrl, json: true }, (_err, _res, body) => {
  const { feelslike, temperature, weather_descriptions } = body.current;
  console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. But feels like ${feelslike} degrees!`);
});

const geocodeUrl = `${process.env.MAPBOX_BASE_URL}mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

request({ url: geocodeUrl, json: true }, (_err, _res, body) => {
  const { center } = body.features[0];
  const latitude = center[1];
  const longitude = center[0];
  console.log(`Los Angeles latitude is ${latitude} and longitude is ${longitude}`);
})