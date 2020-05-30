(function () {
    const high = document.getElementById('high').innerHTML;
    const windSpeed = document.getElementById('windspeed').innerHTML;
    let windChill = 35.74 + (0.6215 * high) - (35.75 * (windSpeed ** .16)) + (0.4275 * high * (windSpeed ** .16));


    if (high <= 50 && windSpeed > 3) {
        windChill = Math.round(windChill);
    } else {
        windChill = "NA";
    }
    document.getElementById('windChill').innerHTML = windChill;
}());