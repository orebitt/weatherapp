let latitude = 0; //initialize lat
let longitude = 0; //iniitalize lon
window.onload = function() { //When the window loads (when the page loads)
    const date = new Date();
    //Outputs our date in MM/DD/YYYY
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementById('date').innerHTML = dateString;
    // Now, set the .date HTML text to our dateString
    if ("geolocation" in navigator) { // If the browser supports location
		navigator.geolocation.getCurrentPosition(success) //Get position and call 'success' function
	} else {// If location does not exist, or if we deny permission
	  console.log("Geolocation is not available in your browser.");
	}
}

function success(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
    console.log(latitude, longitude);
	// Print out the latitude and longitude to see if it works!

}
const btn = document.getElementById('getWeatherBtn');
btn.addEventListener("click", function(){

  // ----------------- CURRENT ----------------- (xhr)
  const xhr = new XMLHttpRequest(); // Defines the XMLHttp object
  xhr.open("GET", `http://localhost:3000/weather/${latitude}/${longitude}`); // opens a get request to the website
  xhr.send(); // sends the request

  xhr.onload = function(){ // Once we get a response
    // Body will look like this: {temperature: 52, weatherStatus: "Clouds"}
    const body = JSON.parse(xhr.responseText); // Set body to the response text
    let temperature = body.temperature; // Parse the temperature from the response
    let weatherStatus = body.weatherStatus; // Parse the weatherStatus from the response
    document.getElementById('temperature').innerHTML = `Temperature: ${temperature} F`; // Set the temperature HTML text to the temperature
    document.getElementById('weatherStatus').innerHTML = `weatherStatus: ${weatherStatus}`; // Set the weatherStatus HTML text to the weatherStatus
  }

  // ----------------- 5-DAY FORECAST ----------------- (xhr2)

  const xhr2 = new XMLHttpRequest(); // Defines the XMLHttp object
  xhr2.open("GET", `http://localhost:3000/5day/${latitude}/${longitude}`); // opens a get request to the website
  xhr2.send(); // sends the request

  xhr2.onload = function(){ // Once we get a response
    const body = JSON.parse(xhr2.responseText);
    let forecast = body; // Parse the forecast from the response, we now have a list of 5 day/temperature pairs
    // forecast = [{Monday: 52}, {Tuesday: 53}, {Wednesday: 54}, {Thursday: 55}, {Friday: 56}}]
    let forecastElements = document.getElementsByClassName("forecast"); // Setting forecastElements to an array of divs with the class 'forecast' (5 in this case): [first div, second div, third div]
    for (let i = 0; i < forecast.length; i++){
      forecastElements[i].innerHTML = forecast[i].dayName + ": " + forecast[i].temp + "\u00B0F";
    }
  }
})

