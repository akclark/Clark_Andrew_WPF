//Andrew K Clark - Functions Worksheet - 29 May 2013

//Example - Calculate the area of a Rectangle

var width = 5; //first variable setup
var length = 6; //Second variable setup
var area = calculateArea(width, length); //final variable setup, plus calling the function
console.log("The area of the rectangle is " + area + "."); //output to user

function calculateArea(width, length){ //function setup
	return width * length;//doing the calc and returning the answer to the area variable
} //end function

//Circumference

var radius = prompt("What is the radius of the circle in question?"); //First variable setup and user input
var pi = 3.14; //second varible input
var circumference = circumCalc(radius, pi); //final variable setup and function invocation, including arguments

console.log("The circumference of the circle is " + circumference + "."); //The required output

function circumCalc(radius, pi){ //initial function setup, with parameter setup
	var circ = (radius * 2) * pi; //the actual calculation
	return circ //returning the calculated value to the circumference variable
} //end function

//Stung!!

var weight = prompt("How much does the victim weigh in lbs?"); //the first variable and user input
var numberOfStingsPer = 8.666666667; //the second variable setup