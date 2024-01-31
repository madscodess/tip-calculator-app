console.log("hello i am working");
let result = 0;

let bill = parseInt(document.getElementById('bill').value);
const tips = document.querySelectorAll('.tip');


tips.forEach(function (tip) {
    bill.addEventListener('input', setBillValue);
    tip.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('5%')){
            console.log(bill);
        }
    });
});

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }
}

// tips.forEach(function (tip) {
// tip.addEventListener('click', function() {
//     console.log("look im working");
//     if (styles.contains('5%')){
//         console.log(bill);
//         console.log("I AM THE BUTTON");
//         const result = Math.round((bill / 5) * 100)
//         console.log(result);
//     };        
// }      
// })




// JS coding project - tip calculator 

// Let input = query.selector(‘#input’);

// Const tenPerc

// If ( 
// User clicks tenperc 
// Run a function
// 10% of input
// Then divide bun amount of people
// )
// input.textcontent 

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function(e){
// const styles = e.currentTarget.classList;
// console.log("I AM THE BUTTON");
//         if (styles.contains('fivePercent')){
//             console.log(bill);
//             console.log("I AM THE BUTTON");
//             const result = Math.round((bill / 5) * 100)
//             console.log(result);
            
//         }
//         //console.log(result);
//     });
// })


