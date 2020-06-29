const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject)

            const current = document.getElementById('currently').textContent = jsObject.weather[0].description;
            const temp = document.getElementById('temp').textContent = jsObject.main.temp;
            const wind = document.getElementById('wind').textContent = jsObject.wind.speed;
            const humid = document.getElementById('humid').textContent = jsObject.main.humidity + '%';
    });       
           
            

 /*Wind Chill*/
 (function () {
     const temp = document.getElementById('temp');
     const windSpeed = document.getElementById('wind');
     let windChill = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** .16)) + (0.4275 * temp * (windSpeed ** .16));


     if (temp <= 50 && windSpeed > 3) {
         windChill = Math.round(windChill);
     } else {
         windChill = " NA";
     }
     document.getElementById('windChill').innerHTML = windChill;
 }());



/*forecast*/
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';

fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'))
        
        console.log(fivedayforecast);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     
 let day = 0;
 fivedayforecast.forEach('forecast => {
         let d = new Date=(forecast.dt.txt)
         document.getElementByid(forecast${day+1}').textContent = forecast.main.temp; 
             document.getElementByid(forecast$ {day + 1}').textContent = weekday[d.getDate()]; 
                 day++*/
    });
                
 





 /* const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';
fetch(apiURL)





           document.getElementById('day1').textContent = Math.round(forecast.list[0].main.temp_max);
             document.getElementById('day2').textContent = Math.round(forecast.list[14].main.temp_max);
             document.getElementById('day3').textContent = Math.round(forecast.list[22].main.temp_max);
             document.getElementById('day4').textContent = Math.round(forecast.list[30].main.temp_max);
             document.getElementById('day5').textContent = Math.round(forecast.list[32].main.temp_max);
             weekcon[0] = parseInt(forecast.list[0].weather[0].id);
             weekcon[1] = forecast.list[14].weather[0].id;
             weekcon[2] = forecast.list[22].weather[0].id;
             weekcon[3] = forecast.list[30].weather[0].id;
             weekcon[4] = parseInt(forecast.list[32].weather[0].id);*/
