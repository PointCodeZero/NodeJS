const request = require('postman-request');
require('dotenv').config()

const url = `${process.env.WEATHERSTACK_BASE_URL}/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=37.8267,-122.4233&unit=f`;

request({ url, json: true }, (_err, _res, body) => {
  const { feelslike, temperature } = body.current;
  console.log(`It is currently ${temperature} degrees out. But feels like ${feelslike} degrees!`);
});
