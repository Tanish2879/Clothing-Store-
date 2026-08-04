/* ================================
   DARK / LIGHT THEME
================================ */

// Get the button

const themeButton = document.getElementById("themeButton");

// Check if dark mode was saved

let savedTheme = localStorage.getItem("theme");

// If dark mode was previously selected

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeButton.innerHTML = "Light Mode";

}

// Button click

themeButton.addEventListener("click", function(){

    // Toggle dark class

    document.body.classList.toggle("dark");

    // Check current mode

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML = "Light Mode";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML = "Dark Mode";

    }

});