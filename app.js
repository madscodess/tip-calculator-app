//get input field
let billTotal = document.getElementById('bill');
console.log(billTotal.value);
// Get all buttons
const buttons = document.querySelectorAll('button');
//get custom tip input
let customTip = document.getElementById('tip-custom');
//get reset button
resetButton = document.getElementById('reset');
//set tipAmount
let tipAmount; 
//text
let tipPerPersonText = document.getElementById('tipAmountPerPerson');
let totalPerPersonText = document.getElementById('totalAmountPerPerson');

// Add a eventListener to every button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() { // when a button gets clicked, an function will fire
    console.log("button clicked");
    //button value (5, 10 etc / 100 * the value of the bill inputted)
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

//reset button
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

      // Reset background color of all buttons
  buttons.forEach(button => {
    button.style.backgroundColor = "";
  });

});

