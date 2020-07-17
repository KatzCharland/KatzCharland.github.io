function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
        classIndex = document.getElementsByClassName("circTxt")[classIndex];

    var deg = 360 / txt.length,
        origin = 11;

    txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
    });
}

circularText("4 You               Scoot's ", 100, 0);