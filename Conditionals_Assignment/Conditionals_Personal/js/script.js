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