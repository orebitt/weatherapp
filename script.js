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
  var forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]] // Nested array of predefined day/forecast pairs
  var forecastElements = document.getElementsByClassName("forecast"); // Setting forecastElements to an array of divs with the class 'forecast' (5 in this case): [first div, second div, third div]
  for (var i = 0; i < forecast.length; i++) { // For loop that goes from the 0th index to the length - 1 index
      forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0F"; // Sets the innerHTML of the i'th 'forecast' div element to a string in the format of "Day: Temp°F"
    }
})

