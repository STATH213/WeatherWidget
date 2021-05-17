console.log("CONNECTED")

var dmon; var dtue; var dwed; var dthur; var dfri; var dsat; var dsun; //dataset vars
var days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; //day strings
dayT = "Monday"; //todays day

var pos = days.indexOf(dayT);
var daycount = pos; //counting what day it is 
maxdisplay = daycount + 3

//dataset high/lowtemp - expec rain - expec wind
var weather =[
    {"day": "Monday", "high": 25, "Low": 13, "wind": 10, "rain": 8},
    {"day":"Tuesday", "high": 26, "Low": 12, "wind": 9, "rain": 6},
    {"day": "Wednesday","high": 27, "Low": 11, "wind": 8, "rain": 5},
    {"day": "Thursday","high": 28, "Low": 10, "wind": 7, "rain": 4},
    {"day": "Friday", "high": 29, "Low": 9, "wind": 6, "rain": 3},
    {"day":"Saturday", "high": 30, "Low": 8, "wind": 5, "rain": 2},
    {"day": "Sunday", "high": 31, "Low": 7, "wind": 4, "rain": 1}
]


while (daycount< maxdisplay){
    if (dayT == days[daycount]){
        while (daycount <= maxdisplay){
            var string = daycount.toString();
            document.getElementById(string+"H").innerHTML = weather[daycount].high
            document.getElementById(string+"L").innerHTML = weather[daycount].Low
            document.getElementById(string+"R").innerHTML = weather[daycount].wind +""+"km/h"
            document.getElementById(string + "W").innerHTML = weather[daycount].rain+""+"%"
            console.log("----------------------")
            console.log(daycount)
            daycount++
        }
    daycount ++
    
    }
}
