function circularText(txt, radius, classIndex) {
    txt =txt.split(""),
      classIndex =
      document.getElementsByClassName("circTxt")
      [classIndex];

}

var deg = 360 / txt.length,
    origin = 0;
    fontSize: 3,
    txt.forEach((ea) => {
        ea = `<p
        style='height:${radius}px;position:absolute;transform:rotate($[origin}deg); transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML +=ea;
        origin += deg;
    
    });
}

circularText("Scoot's 4 You", 32.7, 50);

  

