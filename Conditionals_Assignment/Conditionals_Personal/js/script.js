// Andrew K Clark - Conditionals_Personal - 23 May 2013

//Weight converter, pounds to kilograms

var weightType = prompt("Will you be entering lbs or kg?"); //asking user to input the first variable as type of weight
if(weightType != "kg" && weightType != "lbs"){
	 weightType = prompt("Please enter either lbs or kg!");
}//added logical operator to check for proper user input

if(weightType === "lbs"){ //so if user enters lbs
	var weightTypeOpposite = "kg" //then var is set to kg
}else{ //otherwise
	weightTypeOpposite = "lbs" //it is set to lbs
} //end statement

var weight = prompt("Please enter the number of " + weightType + " you would like to convert to " + weightTypeOpposite + ":"); //asking user to input the amount of weight they want to convert

if(weight == ""){ //checking to see if something has been entered, don't know how to check if it's a number yet
	weight = prompt("Please enter a number."); //Another prompt if the user has not entered a value
} //end statement

var factor = 2.20462; //added a var for the multiplier or divider
var convertedWeight //created variable to be filled by calc
(weightType === "kg") ? convertedWeight = weight * factor : convertedWeight = weight / factor; // calc ternary

console.log(weight + " " + weightType + " is " + convertedWeight + " " + weightTypeOpposite + "."); // required console.log output of answer