const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        //Creating elements and content
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {
                var event_list= "<ul>";
                for (let t = 0; t < towns[i].events.length; t++) {
                    event_list +="<li>"+ towns[i].events[t] + "</li>";  
                }
                 event_list += "</ul>"; 
            }
        }
                                                               
                   
        document.getElementById("pEvents").innerHTML=events_list;

                    
    })