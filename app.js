//get input field
let billTotal = document.getElementById('bill');
console.log(billTotal.value);
// Get all buttons
const buttons = document.querySelectorAll('button');
//get custom tip input
let customTip = document.getElementById('tip-custom');

// Add a eventListener to every button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() { // when a button gets clicked, an function will fire
    console.log("button clicked");
    //button value (5, 10 etc / 100 * the value of the bill inputted)
    let tipAmount = parseFloat(this.value / 100 * billTotal.value);
   console.log(tipAmount);
  // console.log(customTip.value);
  });

  customTip.oninput = function(){
  console.log(this.value);
  let tipAmountCustom = parseFloat(this.value / 100 * billTotal.value);
 //console.log(tipAmountCustom);
}; 

}

//get number of people input & make new variables with input
let numberOfPeople = document.getElementById('people').oninput = function(){
  //console.log(this.value / customTip.value);
 let numberOfPeopleAmount = this;
  //let tipPerPerson = parseFloat(tipAmount.value / this.value);
  let tipPerPersonCustom = parseFloat(customTip.value / numberOfPeopleAmount.value);
  let billPerPerson = parseFloat(billTotal.value / this.value);
  // let totalPerPerson = parseFloat(tipPerPerson plus );
 //console.log(tipPerPerson);
  //console.log(tipPerPersonCustom);
  console.log(billPerPerson);
}


// let customTip = document.getElementById('tip-custom');
// if customTip != 0?? 




