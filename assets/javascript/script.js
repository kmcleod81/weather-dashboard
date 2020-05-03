// an input to allow the user to search for the city

// grab the users input and store it in a variable (userSearch)
// create a function that gets the current weather (Current Weather Data Call)

// function(argument)

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

function(lat, lon) {
    var apikey =
        $.get('http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}', function (res) {

        })
}

// 5 day weather icon
.icon + ".png"