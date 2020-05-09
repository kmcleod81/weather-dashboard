// an input to allow the user to search for the city

// grab the users input and store it in a variable (userSearch)
// create a function that gets the current weather (Current Weather Data Call)

$(document).ready(function () {
  var APIKey = "6b7b386acbe114ac13fa0de66207a370";
  // current city API
  var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=goffstown&appid=${APIKey}`;
  // 5-day forecast API
  var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=goffstown&appid=${APIKey}`;

  // date using moment.js
  var currentDate = moment().format("L");

  $.get(weatherURL).then(function (response) {
    // Log the queryURL
    console.log(weatherURL);
    // Log the resulting object
    console.log(response);
  });
});

// dynamically generate current weather <div>
// inside of that you're going to generate the city, date, tempeature, humidity, wind speed

// you're going to call the getUVIndex function to generate the UV Index element

// create 5DayForecast function
// include the dates, temp and humidity
// dynamically generated using JS
// generate a card which includes <p>, <img>, <h2>, <incon>

// store user search in local storage
// on page load, grab from local storage - grab the most recent search
// if the users search exists in local storage, don't append a new one to the searches, just grab from local storage
// in the getCurrentWeather function, check local storage for previous searches

// var location = document.getElementById("location");

// function(lat, lon) {
//   var APIKey = "6b7b386acbe114ac13fa0de66207a370";
//           $.get('http://api.openweathermap.org/data/2.5/uvi?apikey=${APIKey}', function (res) {

//         })
// }

// 5 day weather icon
// .icon + ".png"
