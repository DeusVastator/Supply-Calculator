"use strict"; 
// Create a function named howMuchSupply().
function howMuchSupply() {
// make a variable that holds the supplies name value. 
var supplyName = document.getElementById("supply").value;
	
// make a variable that holds the years worth of supplies value.
var yearlySupply = parseInt(document.querySelector(".years").value);

  // make a variable that holds the number of daily supply usage.  
var dailySupply = parseInt(document.querySelector(".daily").value);

    
    // make a variable that multiplies the daily supplies used by 365 days to get the total supplies used in a single year.
var perYear = dailySupply * 365;

    // make a variable that multiplies the yearly supply usage with the amount of years the user wants the supplies to last to get the total supplies needed
var needed = perYear * yearlySupply;
    // make a variable that adds the current year and the number of years the user wishes for the supplies to last to show until what year the supply will last.
var date = new Date();
    
var year = date.getFullYear();
    
var yearNeeded = date.getFullYear() + yearlySupply;
    // make a variable that subtracts the current year from the year the supplies will last to. to get how many years the supplies will last.
var remain = year + yearlySupply - year;

// write to the DOM using the id "message" to write to a "p" tag. Fill in all variables into the sentence so all the information is filled in and the user can see it.
   document.getElementById("message").innerHTML = "Looks like you'll need " + needed + " " + supplyName + " to last you until " + yearNeeded + ", which is " + remain + " years from now."; 
}