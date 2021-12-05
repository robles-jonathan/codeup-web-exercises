$(document).ready(function () {
    "use strict";
    mapboxgl.accessToken = MAPBOX_KEY;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4705371, 29.5311973], // starting position [lng, lat] //SAT Airport
        // center: [-97.0425239, 32.8998091], // DFW Airport
        zoom: 10 // starting zoom
    });

    getWeatherInfo(29.5311973, -98.4705371)

    function getWeatherInfo(lat, lon) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: lat,
            lon: lon,
            exclude: ["minutely", "hourly"],
            units: "imperial",
            appid: OPEN_WEATHER_KEY
        }).done(function (data) {

            var dailyArray = data.daily.slice(0,5);

            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ForEACH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
            dailyArray.forEach((element, index, array) => {
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                // how to get the date
                var forEachDate = new Date(array[index].dt * 1000).toDateString().split(" ");
                /*
                    forEachDate = ['Fri', 'Dec', '03', '2021', '16:13:04', 'GMT-0600', '(Central', 'Standard', 'Time)']
                 */
                var date = forEachDate[1] + "-" + forEachDate[2] + "-" + forEachDate[3];

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DEGREES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var minDegrees = array[index].temp.min;
                var maxDegrees = array[index].temp.max;
                var degrees = '<strong>' + minDegrees + '&deg;F  /  ' + maxDegrees + '&deg;F</strong>';

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ICONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var iconLocation = array[index].weather[0].icon
                var icon = '<img src="http://openweathermap.org/img/w/' + iconLocation + '.png" alt="weather icon"/>'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DESCRIPTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var descriptionLocation = array[index].weather[0].description
                var description = '<strong>' + descriptionLocation + '</strong>'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HUMIDITY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var humidityLocation = array[index].humidity
                var humidity = 'Humidity: <strong>' + humidityLocation + '%</strong>'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WIND~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var windLocation = array[index].wind_speed
                var wind = 'Wind: <strong>' + windLocation + ' mph</strong>'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PRESSURE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                var pressureLocation = array[index].pressure
                var pressure = 'Pressure: <strong>' + pressureLocation + ' mbar</strong>'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~INITIALIZING CARD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                const card =
                    `<div class="card" style="width: 18rem;">
                    <h5 class="card-header text-uppercase text-center">${date}</h5>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item text-uppercase text-center">${degrees}</li>
                        <li class="list-group-item text-uppercase text-center">${icon}</li>
                        <li class="list-group-item text-uppercase text-center">${description}</li>
                        <li class="list-group-item text-uppercase text-center">${humidity}</li>
                        <li class="list-group-item text-uppercase text-center">${wind}</li>
                        <li class="list-group-item text-uppercase text-center">${pressure}</li>
                      </ul>
                  </div>
                </div>`
                const ele = document.createElement('div');
                ele.innerHTML = card;
                document.querySelector('#card').appendChild(ele.firstChild);
            })
        })
    }



})

