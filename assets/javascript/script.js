// an input to allow the user to search for the city

// grab the users input and store it in a variable (userSearch)
var APIKey = "6b7b386acbe114ac13fa0de66207a370";

$(document).ready(function () {
  $("#citySearch").on("click", searchWeather);

  function searchWeather() {
    var location = $("#location").val();
    dailyWeather(location);
    forecastWeather(location);
  }

  function dailyWeather(location) {
    // current city API
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=imperial`;

    // date using moment.js
    var currentDate = moment().format("l");

    // create a function that gets the current weather (Current Weather Data Call)
    $.get(weatherURL).then(function (response) {
      // console.log(weatherURL);
      console.log(response);
      // Transfer content to HTML
      $(".city").html("<h2>" + response.name + currentDate);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature: " + response.main.temp);

      // uv index API
      var uvIndexURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&
 exclude=hourly,daily&appid=${APIKey}`;

      $.get(uvIndexURL).then(function (response) {
        // Transfer content to HTML
        $(".uvi").text("UV Index: " + response.current.uvi);

        // generate current city and date elements
        var currentCity = response.name;
        var currentCityEl = $("<span>", {
          style: "font-size: 25px",
        }).text(`${currentCity} (${currentDate}) `);
      });
    });
  }

  function forecastWeather(location) {
    // 5-day forecast API
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKey}&units=imperial`;

    $.get(forecastURL).then(function (response) {
      // $()
      for (let index = 0; index < response.list.length; index++) {
        const element = response.list[index];
        if (element.dt_txt.indexOf("15:00:00") !== -1) {
          console.log(element);
          // populate html for 5 day weather
        }
      }
    });
  }
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
