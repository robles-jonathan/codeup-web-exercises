$(document).ready(function() {
    "use strict";

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        lat: 29.5311973,
        lon: -98.4705371,
        exclude: ["minutely", "hourly"],
        units: "imperial",
        appid: OPEN_WEATHER_KEY
    }).done(function (data) {
        console.log(data);

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        // how to get the date
        console.log(new Date(data.daily[0].dt * 1000));
        var newDate = Date(data.daily[0].dt * 1000).split(" ");
        console.log(newDate);
        /*
            newDate = ['Fri', 'Dec', '03', '2021', '16:13:04', 'GMT-0600', '(Central', 'Standard', 'Time)']
         */
        var date ='<h3 class="text-uppercase text-center">' + newDate[1] + "-" + newDate[2] + "-" + newDate[3] +'</h3>';
        $('#weather-date').append(date);

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DEGREES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var minDegrees = data.daily[0].temp.min;
        var maxDegrees = data.daily[0].temp.max;
        console.log(minDegrees, maxDegrees);
        var degrees = '<h3 class="text-uppercase text-center">' + minDegrees + '&deg;F / ' + maxDegrees + '&deg;F';
        $('#weather-degrees').append(degrees);

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ICONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var iconLocation = data.daily[0].weather[0].icon
        var icon = '<img src="http://openweathermap.org/img/w/' + iconLocation + '.png" alt="weather icon"/>'
        $('#weather-icon').append(icon);

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DESCRIPTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var descriptionLocation = data.daily[0].weather[0].description
        var description = '<h5>Humidity: <strong>' + descriptionLocation + '</strong></h5>'
        $('#weather-description').append(description)

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HUMIDITY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var humidityLocation = data.daily[0].humidity
        var humidity = '<h5>Humidity: <strong>' + humidityLocation + '%</strong></h5>'
        $('#weather-humidity').append(humidity)
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WIND~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var windLocation = data.daily[0].wind_speed
        var wind = '<h5>Wind: <strong>' + windLocation + 'mph</strong></h5>'
        $('#weather-wind').append(wind)
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PRESSURE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        var pressureLocation = data.daily[0].pressure
        var pressure = '<h5>Pressure: <strong>' + pressureLocation + 'mbar</strong></h5>'
        $('#weather-pressure').append(pressure)
    })

})

