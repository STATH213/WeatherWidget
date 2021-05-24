import { getapi } from './API.js';

document.addEventListener('DOMContentLoaded', async function () {
    console.log("CONNECTED")
    console.log(getapi)
    const weather = await getapi("sydney");

    const days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; //day strings

    console.log(weather);
    weather.consolidated_weather.forEach((element, index) => {
        console.log(element);
        const date = new Date(element.applicable_date);
        const dayIndex = date.getDay();
        element.day = days[dayIndex];
    });

    const images = {
        "sn": "https://www.metaweather.com/static/img/weather/sn.svg",
        "sl": "https://www.metaweather.com/static/img/weather/sl.svg",
        "h": "https://www.metaweather.com/static/img/weather/h.svg",
        "t": "https://www.metaweather.com/static/img/weather/t.svg",
        "hr": "https://www.metaweather.com/static/img/weather/hr.svg",
        "lr": "https://www.metaweather.com/static/img/weather/lr.svg",
        "s": "https://www.metaweather.com/static/img/weather/s.svg",
        "hc": "https://www.metaweather.com/static/img/weather/hc.svg",
        "lc": "https://www.metaweather.com/static/img/weather/lc.svg",
        "c": "https://www.metaweather.com/static/img/weather/c.svg"

    };

    var dmon; var dtue; var dwed; var dthur; var dfri; var dsat; var dsun; //dataset vars
    const dayT = "Monday"; //todays day

    var pos = days.indexOf(dayT);
    var daycount = pos; //counting what day it is 
    const maxdisplay = daycount + 3
    console.log(maxdisplay)

    var num = 0;

    while (daycount < maxdisplay){
        if (dayT == days[daycount]){
            document.getElementById("the_temp").innerHTML = Math.round(weather.consolidated_weather[daycount].the_temp)

            while (daycount <= maxdisplay){



                //var string = daycount.toString();
                const wimg = weather.consolidated_weather[daycount].weather_state_abbr
                document.getElementById("img"+num).src = "https://www.metaweather.com/static/img/weather/"+wimg+".svg"
                document.getElementById("day"+num).innerHTML = days[daycount]
                document.getElementById(num+"H").innerHTML = Math.round(weather.consolidated_weather[daycount].max_temp)
                document.getElementById(num+"L").innerHTML = Math.round(weather.consolidated_weather[daycount].min_temp)
                document.getElementById(num+"W").innerHTML = "Wind: "+ Math.round(weather.consolidated_weather[daycount].wind_speed) +""+"km/h"
                console.log("----------------------")
                console.log(daycount)
                console.log(num)
                daycount++
                num ++
            }
        daycount ++
        
        }
    }

}, false);