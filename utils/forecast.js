const request = require("postman-request");
const http = require('http');

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=bb822cda2d13e728d7f5b1b69eb3866d&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  http.request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          response.body.current.temperature +
          " degress out. It feels like " +
          response.body.current.feelslike +
          " degre."
      );
    }
  });
};

module.exports = forecast;
