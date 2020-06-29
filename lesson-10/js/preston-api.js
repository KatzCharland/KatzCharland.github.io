const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject)

            const current = document.getElementById('currently').textContent = jsObject.weather[0].description;
            const temp = document.getElementById('temp').textContent = jsObject.main.temp;
            const wind = document.getElementById('windSpeed').textContent = jsObject.wind.speed;
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
        
        console.log(fivedayforecast);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     
 let day = 0;
 fivedayforecast.forEach(forecast => {
    let d = new Date(forecast.dt_txt); 
       document.getElementById(`data${day+1}`).textContent = forecast.main.temp;
       document.getElementById(`wicon${day+1}`).textContent =weekday[day.getDay()]; 
        day++;
        document.getElementById(`wicon${day+1}`).alt= forecast.weather[0].description;
    });
                
 



});

