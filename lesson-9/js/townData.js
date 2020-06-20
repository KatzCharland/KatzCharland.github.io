const requestURL = '"https://byui-cit230.github.io/weather/data/towndata.json"';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const townData = jsonObject['townData'];

        for (let i = 0; i < townData.length; i++) {
            let card = document.createElement('section');
            let title = document.createElement('h2');
            let birthdate = document.createElement('p');
            let bornAt = document.createElement('p');
            let photo = document.createElement('img');


            birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
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