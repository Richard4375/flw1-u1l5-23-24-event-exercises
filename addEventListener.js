// These variables store the HTML elements.
// Use the variables as your selectors.
let consoleButton = document.querySelector(".console-button");
let alertButton = document.querySelector(".alert-button");
let coordinateButton = document.querySelector(".coordinate-button");

// Function we will use in our third task.
function getCoordinates(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
}

// 1. Add the event listener for consoleButton.
//  - Select the variable.
//  - Add the .addEventListener method.
//  - The event type is "click".
//  - The function should log whatever message you want to the console.
consoleButton.addEventListener('click', function(){
  console.log('pineapple')
})

// 2. Add the event listener for alertButton.
//  - Select the variable.
//  - Add the .addEventListener method.
//  - The event type is "click".
//  - The function should alert whatever message you want.
//  - Not sure how to alert something? Look here: https://www.w3schools.com/jsref/met_win_alert.asp 
//  - Still not sure? Ask for support :)

alertButton.addEventListener('click', function(){
  alert('pizza')
})


// 3. Add the event listener for coordinateButton.
//  - Select the variable.
//  - Add the .addEventListener method.
//  - The event type is "click".
//  - There's already a function defined above that we can use!
//  - All you need to do is use the function name.
//  - Check out the first example here if you get stuck: https://www.w3schools.com/jsref/met_document_addeventlistener.asp 

coordinateButton.addEventListener('click', getCoordinates)