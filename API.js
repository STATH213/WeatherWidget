//const get_woeid = "https://www.metaweather.com/api/location/search/?query=adelaide";

const api_url = "https://www.metaweather.com/api/location/1099805/?query=adelaide";

async function getapi(api_url) {
    
    // Storing response
    const response = await fetch(api_url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}

