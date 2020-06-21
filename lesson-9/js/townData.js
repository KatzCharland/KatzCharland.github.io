const requestURL = '"https://byui-cit230.github.io/weather/data/towndata.json"';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const townData = jsonObject['townData'];
       const relevantTowns = ["Fish Haven", "Soda Springs", "Preston"]; 

        for (let i = 0; i < townData.length; i++) {
            let card = document.createElement('townholder');
            let description =document.createElement ('span');
            let name= document.createElement('h1');
            let motto = document.createElement('h2');
            let year = document.createElement('h3');
            let population = document.createElement('h4');
            let annuualRain = document.createElement('h5');
            let image = document.createElement('img');
           

          
            name.textContent = townData[i].name + ' ' + townData[i].name;
            motto.textContent = 'Place of Birth: ' + townData[i].birthplace
            year.textContent = 'yearFounded: ' + townData[i].y;
            
            photo.setAttribute('src', townData[i].imageurl);
            photo.setAttribute('alt', townData[i].name + townData[i].lastname + " - " + townData[i].order);
           

            card.appendChild(name);
            card.appendChild(moto);
            card.appendChild(yearFounded);
            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);
        }
    });

    