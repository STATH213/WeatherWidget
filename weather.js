// for Highest temperature
var monWeatherHigh = "21";
var tueWeatherHigh = "25";
var wedWeatherHigh = "30";
var thursWeatherHigh = "10";
var friWeatherHigh = "19";
var satWeatherHigh = "23";
var sunWeatherHigh = "18";

//for lowesr temperature
var monWeatherLow = "12";
var tueWeatherLow = "13";
var wedWeatherLow = "14";
var thursWeatherLow = "7";
var friWeatherLow = "16";
var satWeatherLow = "14";
var sunWeatherLow = "8";

// for expected rainfall
var monRain = "12 % ";
var tueRain = "2 %";
var wedRain = "3 %";
var thursRain = "1 %";
var friRain = "7 %";
var satRain = "20 %";
var sunRain = "17 %";

//for expected wind
var monWind = "9 km/h";
var tueWind = "6 km/h";
var wedWind = "10 km/h";
var thursWind = "25 km/h";
var friWind = "18 km/h";
var satWind = "12 km/h";
var sunWind = "33 km/h";


var weather = {
    Monday: [monWeatherHigh, monWeatherLow, monRain, monWind],
    Tuesday: [tueWeatherHigh, tueWeatherLow, tueRain, tueWind],
    Wednesday: [wedWeatherHigh, wedWeatherLow, wedRain, wedWind],
    Thursday: [thursWeatherHigh, thursWeatherLow, thursRain, thursWind],
    Friday: [friWeatherHigh, friWeatherLow, friRain, friWind],
    Saturday: [satWeatherHigh, satWeatherLow, satRain, satWind],
    Sunday: [sunWeatherHigh, sunWeatherLow, sunRain, sunWind]
};


// ids = ["1st","2nd","3rd","4th"]

console.log("CONNECTED");

document.getElementById("0H").innerHTML = weather.Monday[0];
document.getElementById("1H").innerHTML = weather.Tuesday[0];
document.getElementById("2H").innerHTML = weather.Wednesday[0];
document.getElementById("3H").innerHTML = weather.Thursday[0];
//document.getElementById("2ndH").innerHTML = weather.Friday[0];
//document.getElementById("3rdH").innerHTML = weather.Saturday[0];
//document.getElementById("4thH").innerHTML = weather.Sunday[0];

document.getElementById("0L").innerHTML = weather.Monday[1];
document.getElementById("1L").innerHTML = weather.Tuesday[1];
document.getElementById("2L").innerHTML = weather.Wednesday[1];
document.getElementById("3L").innerHTML = weather.Thursday[1];
//document.getElementById("2ndL").innerHTML = weather.Friday[1];
//document.getElementById("3rdL").innerHTML = weather.Saturday[1];
//document.getElementById("4thL").innerHTML = weather.Sunday[1];

document.getElementById("0R").innerHTML = weather.Monday[2];
document.getElementById("1R").innerHTML = weather.Tuesday[2];
document.getElementById("2R").innerHTML = weather.Wednesday[2];
document.getElementById("3R").innerHTML = weather.Thursday[2];
//document.getElementById("2ndL").innerHTML = weather.Friday[1];
//document.getElementById("3rdL").innerHTML = weather.Saturday[1];
//document.getElementById("4thL").innerHTML = weather.Sunday[1];

document.getElementById("0W").innerHTML = weather.Monday[3];
document.getElementById("1W").innerHTML = weather.Tuesday[3];
document.getElementById("2W").innerHTML = weather.Wednesday[3];
document.getElementById("3W").innerHTML = weather.Thursday[3];
//document.getElementById("2ndL").innerHTML = weather.Friday[1];
//document.getElementById("3rdL").innerHTML = weather.Saturday[1];
//document.getElementById("4thL").innerHTML = weather.Sunday[1];



