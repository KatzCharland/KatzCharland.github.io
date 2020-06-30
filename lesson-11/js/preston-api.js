const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        

            const current = document.getElementById('currently').textContent = jsObject.weather[0].description;
            const temp = document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + '°F';
            const wind = document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed) + "mph";
            const humid = document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
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
        

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     
 let day = 0;
 fivedayforecast.forEach(forecast => {
    let d = new Date(forecast.dt_txt.replace(' ', 'T'));
       document.getElementById(`data${day+1}`).textContent = Math.round(forecast.main.temp);
       document.getElementById(`col-head${day+1}`).textContent =weekdays[d.getDay()]; 
    
        document.getElementById(`clan${day+1}`).alt= forecast.weather[0].description;
        document.getElementById('clan' + (day + 1)).src = "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";

        day++;
    });
                
 



});

