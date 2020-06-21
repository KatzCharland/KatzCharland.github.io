const requestURL = '"https://byui-cit230.github.io/weather/data/towndata.json"';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const townData = jsonObject['townData'];
            //Creating elements and content
        for (let i = 0; i < townData.length; i++) {
            if (townData[i].name == "Preston" || townData[i].name == "Soda Springs" || townData[i].name == "Fish Haven")
           
            //Creating image section
            let card = document.createElement('section');
            let image = document.createElement('img');
           //Creating text section  
            let description =document.createElement ('div');
            let name= document.createElement('h1');
            let motto = document.createElement('h2');
            let yearFoundeed = document.createElement('p');
            let population = document.createElement('p');
            let averageRain = document.createElement('p');
           
          //Creating content
             photo.setAttribute('src', 'townData/' +  townData[i].image);
             photo.setAttribute('alt', townData[i].name);
             name.textContent = townData[i].name;
             motto.textContent = '\"' + townData[i].moto + '\"';
             year.textContent = 'Founded: ' + townData[i].yearFounded;
             population.textContent ='Population: ' + townData [i].presentPopulation;
             rainfall.textContent = 'Average Rainfall:' + townData[i].averageRainfall;
            //Inserting elements into image section
           card.appendChild(photo);
           //Inserting elements in text section
            text.appendChild(name);
            text.appendChild(moto);
            text.appendChild(founded);
            text.appendChild(population);
            text.appendChild(rainfall);
            card.appendChild(text); 
            document.querySelector('div.cards').appendChild(card);
        }
    });

    