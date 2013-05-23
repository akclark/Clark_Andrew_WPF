// Andrew K Clark - Conditionals_Personal - 23 May 2013

//Weight converter, pounds to kilograms

var weightType = prompt("Will you be entering lbs or kg?"); //asking user to input the first variable as type of weight
(weightType != "kg" && weightType != "lbs") ? weightType = prompt("Please enter either lbs or kg!") : alert("Thank you!"); //added logical operator to check for proper user input

if(weightType === "lbs"){ //so if user enters lbs
	var weightTypeOpposite = "kg" //then var is set to kg
}else{ //otherwise
	weightTypeOpposite = "lbs" //it is set to lbs
} //end statement

var weight = prompt("Please enter the number of " + weightType + " you would like to convert to " + weightTypeOpposite + ":"); //asking user to input the amount of weight they want to convert

var factor = 2.20462; //added a var for the multiplier or divider
var convertedWeight //created variable to be filled by calc
(weightType === "kg") ? convertedWeight = weight * factor : convertedWeight = weight / factor; // calc ternary

