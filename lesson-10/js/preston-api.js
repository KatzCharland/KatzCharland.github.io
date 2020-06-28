const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=626e9cefb93369cce66d9f4b2afe71fc&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject)
            const currentTemp = document.querySelector('#current-temp')
            const icon = document.querySelector('img');

            currentTemp.textContent = jsObject.main.temp

            const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
            const desc = jsObject.weather[0].description;

            icon.setAttribute('src', imagesrc);
            icon.setAttribute('alt', desc);


 const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'))
 console.log(fivedayforcast)
 const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

 let day = 0;
 fivedayforecast.forEach('forecast => {
         let d = new Date=(forecast.dt.txt)
         document.getElementByid(forecast${day+1}').textContent = forecast.main.temp; 
             document.getElementByid(forecast$ {day + 1}').textContent = weekday[d.getDate()]; 
                 day++
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
