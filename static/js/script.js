// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the dropdown button element
    var dropdownButton = document.querySelector(".navbar-toggler");
  
    // Select the dropdown menu element
    var dropdownMenu = document.querySelector(".navbar-collapse");
  
    // Add a click event listener to the dropdown button
    dropdownButton.addEventListener("click", function () {
      // Toggle the "show" class on the dropdown menu
      dropdownMenu.classList.toggle("show");
    });
  
    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener("click", function (event) {
      if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
  