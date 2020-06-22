const requestURL = 'https://byui-cit230.github.io/weather/data/towns.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
            //Creating elements and content
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
           
            //Creating image section
            let card = document.createElement('section');
            let photo = document.createElement('img');
           //Creating text section  
            let description =document.createElement ('div');
            let name= document.createElement('h1');
            let motto = document.createElement('h2');
            let yearFoundeed = document.createElement('p');
            let population = document.createElement('p');
            let averageRain = document.createElement('p');
           
          //Creating content
             photo.setAttribute('src', 'towns/' +  towns[i].photo);
             photo.setAttribute('alt', towns[i].name);
             name.textContent = towns[i].name;
             motto.textContent = '\"' + towns[i].moto + '\"';
             year.textContent = 'Founded: ' + towns[i].yearFounded;
             population.textContent ='Population: ' + towns[i].presentPopulation;
             rainfall.textContent = 'Average Rainfall:' + towns[i].averageRainfall;
            //Inserting elements into image section
           card.appendChild(photo);
           //Inserting elements in text section
            text.appendChild(name);
            text.appendChild(moto);
            text.appendChild(founded);
            text.appendChild(population);
            text.appendChild(rainfall);
            card.appendChild(text); 
            document.querySelector('.towns').appendChild(card);
        }
    });

    