// an input to allow the user to search for the city (local storage)
// grab the users input and store it in a variable (userSearch)


// API key for open weather map
var APIKey = "6b7b386acbe114ac13fa0de66207a370";

$(document).ready(function () {

  $("#citySearch").on("click", searchWeather);

  function searchWeather() {
    var location = $("#location").val();
    dailyWeather(location);
    forecastWeather(location);
  }

  // inside of that you're going to generate the city, date, tempeature, humidity, wind speed
  function dailyWeather(location) {
    // current city API (imperial changes output of temp to farenheit)
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=imperial`;

    // date using moment.js
    var currentDate = moment().format("l");

    // create a function that gets the current weather (Current Weather Data Call)
    $.get(weatherURL).then(function (response) {
      // console.log(weatherURL);
      /*    console.log(response);
         console.log(response.name);
         console.log(currentDate); */

      // // dynamically generate current weather <div> ** NOT WORKKING **

      // var currentCity = response.name;
      // var currentCityEl = $("<div>", {
      // }).text(`${currentCity} (${currentDate}) `);



      // Create current weather icon element 
      var weatherIcon = response.weather[0].icon;
      var srcIcon = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

      // Transfer content to HTML

      $(".city").html("<h3>" + response.name + " (" + currentDate + ") ");

      var image = $("<img>").prop({ src: srcIcon });
      $(".city").append(image);

      var currentWindSpeed = Math.round(response.wind.speed);
      $(".wind").text("Wind Speed: " + currentWindSpeed + " MPH");

      $(".humidity").text("Humidity: " + response.main.humidity + "%");

      var currentTemp = Math.round(response.main.temp);
      $(".temp").text("Temperature: " + currentTemp + " F°");




      // UV index API
      var uvIndexURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&
 exclude=hourly,daily&appid=${APIKey}`;

      $.get(uvIndexURL).then(function (response) {

        // Create UV index element
        var currentUV = response.current.uvi;
        var uvIndexOuter = $("<p>").text("UV Index: ");
        var uvIndexInner = $("<span>").addClass("uvBox").text(currentUV);

        // Transfer UV Index to HTML
        uvIndexInner.appendTo(uvIndexOuter);

        // If statement changing color of UV box based on the current UV index
        if (currentUV >= 0 && currentUV <= 2.99) {
          uvIndexInner.css("background-color", "green").text(currentUV);
        }
        if (currentUV >= 3 && currentUV <= 5.99) {
          uvIndexInner.css("background-color", "yellow").text(currentUV);
        }
        if (currentUV >= 6 && currentUV <= 7.99) {
          uvIndexInner.css("background-color", "orange").text(currentUV);
        }
        if (currentUV >= 8 && currentUV <= 10.99) {
          uvIndexInner.css("background-color", "red").text(currentUV);
        }
        if (currentUV >= 11) {
          uvIndexInner.css("background-color", "violet").text(currentUV);
        }

        // Append UV index to #currentCity ID
        $(".uvi").html(uvIndexOuter);
      });
    });
  }


  // create 5DayForecast function
  // include the dates, temp and humidity
  // dynamically generated using JS
  // generate a card which includes <p>, <img>, <h2>, <icon>

  function forecastWeather(location) {
    // 5-day forecast API
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKey}&units=imperial`;

    $.get(forecastURL).then(function (response) {
      $("#fiveDayForecast").html("");
      for (let index = 0; index < response.list.length; index++) {
        const element = response.list[index];
        if (element.dt_txt.indexOf("15:00:00") !== -1) {
          console.log(element);
          // populate html for 5 day weather
          var header = $("<h5>").text("Five Day Forecast:");

          var date = moment().format("l");

          var card = $("<div>").addClass("col-md-2 card");

          var weatherIcon = element.weather[0].icon;
          var srcIcon = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
          var img = $("<img>").attr("src", srcIcon);

          var fiveDayTemp = Math.round(element.main.temp);
          var temp = $("<p>").text("Temp: " + fiveDayTemp + " F°");

          var hum = $("<p>").text("Humidity: " + element.main.humidity + "%");

          $(".header").html(header);
          card.append(date, img, temp, hum);
          $("#fiveDayForecast").append(card);

        }

      }

    });
  }
});

// store user search in local storage
// on page load, grab from local storage - grab the most recent search
// if the users search exists in local storage, don't append a new one to the searches, just grab from local storage
// in the getCurrentWeather function, check local storage for previous searches

function getJSONfromLocalStorage(key) {
  returnJSON.parse(localStorage.getItem(key));
}

function saveJSONtoLocalStorage(key, value) {
  var currentData = getJSONfromLocalStorage(key);
  currentData.push(value);
  var JSONdata = JSON.stringify(currentData);
  localStorage.setItem(key, JSONdata);
  return currentData;
}



// var location = document.getElementById("location");

// function(lat, lon) {
//   var APIKey = "6b7b386acbe114ac13fa0de66207a370";
//           $.get('http://api.openweathermap.org/data/2.5/uvi?apikey=${APIKey}', function (res) {

//         })
// }

// 5 day weather icon
// .icon + ".png"