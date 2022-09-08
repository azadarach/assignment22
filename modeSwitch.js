
let isDarkMode = false; // this is the initial value of the bool

// Swaps light mode/dark mode based on if isDarkMode is true or false.

function switchModes(){ 
    if(isDarkMode === false){ // if the bool is set to false, the colours will be this
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        // document.documentElement.style.setProperty("--col-03", "#add8e6");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;
    } else { // if its true, the colours will be set to this mode?
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
       // document.documentElement.style.setProperty("#add8e6", "--col-03"); // figure this out why this doesn't change back
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
}

