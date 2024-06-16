# Frontend Mentor - Tip calculator app

![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)

# Overview

This project is a simple Tip Calculator designed to calculate the tip amount per person based on the bill total and the number of people. Users can select a preset tip percentage, enter a custom tip percentage, and see the results dynamically update. The project is built using HTML, CSS, and JavaScript.

# Features

Calculate tip per person and total amount per person.
Preset tip buttons (5%, 10%, 15%, etc.).
Custom tip percentage input.
Error handling for invalid number of people input.
Reset button to clear all inputs and results.

# Technologies Used

HTML
CSS
JavaScript

# Issues and Solutions

- Preset Tip Button Styles
  Issue: Only the clicked preset tip button should change color, and the others should reset to the original color.

Solution: Added a loop to reset the background color of all buttons when one button is clicked, and set the background color of the clicked button.

- Reset Functionality
  Issue: The reset button needed to clear all input fields, reset displayed values, hide error messages, and reset button styles.

Solution: Implemented a comprehensive reset function that clears all relevant fields and resets styles.

- Error Message Display
  Issue: The error message was not displaying correctly when the number of people input was invalid or empty.

Solution: Updated the CSS to hide the error message by default using display: none;. Added JavaScript to toggle the error message display based on the validity of the number of people input.
