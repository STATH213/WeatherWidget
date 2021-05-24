//const get_woeid = "https://www.metaweather.com/api/location/search/?query=adelaide";

const getLocationNameFromCoords = async function (position) {
    const api_url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}%2C${position.coords.longitude}&language=en`;
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
async function successFunction(position) {
    await getLocationNameFromCoords(position)
}

function errorFunction(){
    alert("Geocoder failed");
}

const getWoeid = async function (location) {
    const api_url = `https://www.metaweather.com/api/location/search/?query=${location}`;
    const response = await fetch(api_url);
    const data = await response.json();
    return data[0].woeid;
}

export const getapi = async function (location) {
    const woeid = await getWoeid(location);

    const api_url = `https://www.metaweather.com/api/location/${woeid}/`;
    //const api_url = "./weather_data.json";
    
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    const data = await response.json();
    return data;
}

