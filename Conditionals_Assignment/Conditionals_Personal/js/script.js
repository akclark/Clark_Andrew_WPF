// Andrew K Clark - Conditionals_Personal - 23 May 2013

//Weight converter, pounds to kilograms

var weightType = prompt("Will you be entering lbs or kg?"); //asking user to input the first variable as type of weight
if(weightType === "lbs"){ //so if user enters lbs
	var weightTypeOpposite = "kg" //then var is set to kg
}else{ //otherwise
	weightTypeOpposite = "lbs" //it is set to lbs
} //end statement
var weight = prompt("Please enter the number of " + weightType + " you would like to convert to " + weightTypeOpposite + ":"); //asking user to input the amount of weight they want to convert

