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
            let card = document.createElement('section');
            let description =document.createElement ('span');
            let h2 = document.createElement('h2');
            let annuualRain= document.createElement('p');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let image = document.createElement('img');
            let div = document.createElement('div');

            


            year.textContent = 'year founded: ' + prophets[i].y;
            bornAt.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            photo.setAttribute('src', prophets[i].imageurl);
            photo.setAttribute('alt', prophets[i].name + prophets[i].lastname + " - " + prophets[i].order);
            title.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            card.appendChild(title);
            card.appendChild(birthdate);
            card.appendChild(bornAt);
            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);
        }
    });

    