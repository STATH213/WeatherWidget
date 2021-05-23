console.log("CONNECTED")

images = {
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
var days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; //day strings
dayT = "Wednesday"; //todays day

var pos = days.indexOf(dayT);
var daycount = pos; //counting what day it is 
maxdisplay = daycount + 3
console.log(maxdisplay)

//dataset high/lowtemp - expec rain - expec wind
var weather = [
    {
        "day": "Monday", 
        "max_temp":23.075, 
        "min_temp":17.15, 
        "wind_speed":3.889568364018134, 
        "the_temp":22.665,
        "rain": 8.4,
        "weather_state_abbr":"hc"
    },

    {
        "day":"Tuesday",
        "max_temp":33.075, 
        "min_temp":24.15, 
        "wind_speed":19.889568364018134, 
        "the_temp":27.5,
        "rain": 6,
        "weather_state_abbr":"c"
    },

    {
        "day": "Wednesday",
        "max_temp":23.075, 
        "min_temp":13.15, 
        "wind_speed":9.889568364018134, 
        "the_temp":21.665,
        "rain": 5,
        "weather_state_abbr":"c"
    },

    {
        "day": "Thursday",
        "max_temp":22.075, 
        "min_temp":14.15, 
        "wind_speed":8.889568364018134, 
        "the_temp":27.665,
        "rain": 4,
        "weather_state_abbr":"hr"
    },

    {
        "day": "Friday",
        "max_temp":30.075, 
        "min_temp":20.15, 
        "wind_speed":6.889568364018134, 
        "the_temp":26.665,
        "rain": 3,
        "weather_state_abbr":"lc",
    },
    
    {
        "day":"Saturday",
        "max_temp":29.075, 
        "min_temp":19.15, 
        "wind_speed":5.889568364018134, 
        "the_temp":24.665,
        "rain": 2,
        "weather_state_abbr":"hr",
    },

    {
        "day": "Sunday",
        "max_temp":28.075, 
        "min_temp":18.15, 
        "wind_speed":4.889568364018134, 
        "the_temp":25.665,
        "rain": 1,
        "weather_state_abbr":"s",
    }
];

var num = 0;

while (daycount < maxdisplay){
    if (dayT == days[daycount]){
        while (daycount <= maxdisplay){
            //var string = daycount.toString();
            wimg = weather[daycount].weather_state_abbr
            document.getElementById("img"+num).src = "https://www.metaweather.com/static/img/weather/"+wimg+".svg"
            document.getElementById("day"+num).innerHTML = days[daycount]
            document.getElementById(num+"H").innerHTML = Math.round(weather[daycount].max_temp)
            document.getElementById(num+"L").innerHTML = Math.round(weather[daycount].min_temp)
            document.getElementById(num+"R").innerHTML = "Wind: "+ Math.round(weather[daycount].wind_speed) +""+"km/h"
            document.getElementById(num + "W").innerHTML = "Rain: "+ Math.round(weather[daycount].rain) +""+"%"
            console.log("----------------------")
            console.log(daycount)
            console.log(num)
            daycount++
            num ++
        }
    daycount ++
    
    }
}
