
let isDarkMode = false; // this is the initial value of the bool

// Swaps light mode/dark mode based on if isDarkMode is true or false.

function switchModes(){ 
    if(isDarkMode === false){ // switches from light mode to dark mode. if the bool is set to false, the colours will be set to dark mode.
        document.documentElement.style.setProperty("--col-01", "#f2fbeb"); // colour 1 is black
        document.documentElement.style.setProperty("--col-02", "#171219"); // colour 2 is off-white
        document.getElementById("modeButton").innerHTML = "Light Mode"; // the button 
        isDarkMode = true;
    } else { // switches from dark mode back to light mode when the button is clicked.
        document.documentElement.style.setProperty("--col-01", "#171219"); // the else statement is telling us if isDarkMode is true, the colour
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
}

// References 
// https://www.w3schools.com/html/html_responsive.asp
// https://www.w3schools.com/css/css3_buttons.asp
// https://www.w3schools.com/howto/howto_js_topnav.asp
// https://www.w3schools.com/tags/tag_a.asp
// https://www.w3schools.com/css/css_link.asp 
