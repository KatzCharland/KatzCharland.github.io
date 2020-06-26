const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=626e9cefb93369cce66d9f4b2afe71fc";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);


 var weekcon = new Array(5);

     .then((response) => response.json())
     .then((forecast) => {
             console.log(forecast);
             document.getElementById('day1').textContent = Math.round(forecast.list[0].main.temp_max);
             document.getElementById('day2').textContent = Math.round(forecast.list[14].main.temp_max);
             document.getElementById('day3').textContent = Math.round(forecast.list[22].main.temp_max);
             document.getElementById('day4').textContent = Math.round(forecast.list[30].main.temp_max);
             document.getElementById('day5').textContent = Math.round(forecast.list[32].main.temp_max);
             weekcon[0] = parseInt(forecast.list[0].weather[0].id);
             weekcon[1] = forecast.list[14].weather[0].id;
             weekcon[2] = forecast.list[22].weather[0].id;
             weekcon[3] = forecast.list[30].weather[0].id;
             weekcon[4] = parseInt(forecast.list[32].weather[0].id);












    });

