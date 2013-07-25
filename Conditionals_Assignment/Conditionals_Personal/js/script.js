//Andrew K Clark
//Conditionals - Personal
//25 July 2013

//Volume Conversion - Liquid US quarts to litres

var volumeType = prompt("Will you be entering quarts or litres?"); //asking for input of the first variable as a type of volume
if (volumeType != "quarts" && volumeType != "litres") {
    volumeType = prompt("Please enter either quarts or litres!")
} //added logical operator and conditional to check for proper user input

if (volumeType === "quarts") { //if the user enters quarts
    var volumeTypeOpposite = "litres" //then the var is set to litres
}else{ //otherwise
    volumeTypeOpposite = "quarts" //the var is set to quarts
} //end statement

var quantity = prompt("Please enter the number of " + volumeType + " you would like to convert to " + volumeTypeOpposite + ":"); //requesting the amount of whichever weight they want to convert

if (quantity == "") { //checking to see if the quantity variable is blank
    quantity = prompt("Please enter a number."); //if it is blank, a reminder that a number is needed here.
}// end statement.

var factor = 1.05668821; //added a variable for the conversion factor
var convertedVolume //created a variable to be filled by the calculation
(volumeType === "quarts") ? convertedVolume = quantity * factor : convertedVolume = quantity / factor; //calc ternary