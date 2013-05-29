//Andrew K Clark - Functions Worksheet - 29 May 2013

//Example - Calculate the area of a Rectangle

var width = 5; //first variable setup
var length = 6; //Second variable setup
var area = calculateArea(width, length); //final variable setup, plus calling the function
console.log("The area of the rectangle is " + area + "."); //output to user

function calculateArea(width, length){ //function setup
	return width * length;//doing the calc and returning the answer to the area variable
} //end function

//CIrcumference

var radius = prompt("What is the radius of the circle in question?");
var pi = 3.14;
var circumference = circumCalc(radius, pi);

function circumCalc(radius, pi){
	var circ = (radius * 2) * pi;
	return circ
}

console.log("The circumference of the circle is " + circumference + ".");