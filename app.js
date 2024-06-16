// Get input field
let billTotal = document.getElementById('bill');
console.log(billTotal.value);
// Get all buttons
const buttons = document.querySelectorAll('button');
// Get custom tip input
let customTip = document.getElementById('tip-custom');
// Get reset button
let resetButton = document.getElementById('reset');
// Set tipAmount
let tipAmount; 
// Text
let tipPerPersonText = document.getElementById('tipAmountPerPerson');
let totalPerPersonText = document.getElementById('totalAmountPerPerson');
// Error message
let errorMessage = document.getElementById("error");

// Add an event listener to every button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() { // when a button gets clicked, a function will fire
    console.log("button clicked");
    // Button value (5, 10 etc / 100 * the value of the bill inputted)
    tipAmount = parseFloat(this.value / 100 * billTotal.value);
    console.log(tipAmount);
    this.style.backgroundColor = "hsl(172, 67%, 45%)";
    
    // Reset background color of other buttons
    buttons.forEach(btn => {
      if (btn !== this) {
        btn.style.backgroundColor = ""; // Reset background color
      }
    });
    
  });
}

// Event listener for custom tip input
customTip.oninput = function() {
  console.log(this.value);
  // Calculate tipAmount based on custom tip input
  tipAmount = parseFloat(this.value / 100 * billTotal.value);
  console.log(tipAmount);
  // Recalculate tip per person and update the display
  calculateTipPerPerson();
}; 

// Function to calculate tip per person and update display
function calculateTipPerPerson() {
  // Get number of people input
  let numberOfPeopleAmount = parseFloat(document.getElementById('people').value);
  
  // Check if number of people is valid
  if (!numberOfPeopleAmount || numberOfPeopleAmount <= 0) {
    // Show error message
    errorMessage.style.display = "block";
    return;
  } else {
    // Hide error message
    errorMessage.style.display = "none";
  }
  
  // Calculate tip per person
  let tipPerPerson = parseFloat(tipAmount / numberOfPeopleAmount);
  // Calculate bill per person
  let billPerPerson = parseFloat(billTotal.value / numberOfPeopleAmount);
  // Update tip per person text
  tipPerPersonText.innerHTML = tipPerPerson.toFixed(2);
  // Calculate total amount per person (bill + tip)
  let totalAmountPerPerson = billPerPerson + tipPerPerson;
  // Update total amount per person text
  totalPerPersonText.innerHTML = totalAmountPerPerson.toFixed(2); 
}

// Event listener for number of people input
document.getElementById('people').oninput = calculateTipPerPerson;

// Reset button
resetButton.addEventListener('click', function() {
    // Clear the bill total input value
    billTotal.value = '';
    
    // Clear the custom tip input value
    customTip.value = '';

    // Clear the number of people input value
    let numberOfPeople = document.getElementById('people');
    numberOfPeople.value = '';

    // Clear displayed tip per person and total amount per person
    tipPerPersonText.innerHTML = '';
    totalPerPersonText.innerHTML = '';

    // Hide error message
    errorMessage.style.display = 'none';

    // Reset background color of all buttons
    buttons.forEach(button => {
        button.style.backgroundColor = "";
    });

});
