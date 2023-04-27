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
    
    
/*btn.addEventListener("click", function(){
        //code here
})
*/