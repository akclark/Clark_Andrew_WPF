//Andrew K Clark - Functions Worksheet - 29 May 2013

//Example - Calculate the area of a Rectangle

var width = 5;
var length = 6;
var area = calculateArea(width, length);
console.log("The area of the rectangle is " + area + ".");

function calculateArea(width, length)
{
	return width * length;
}

//CIrcumference

var radius = prompt("What is the radius of the circle in question?");
var pi = 3.14;
var circumference = circumCalc(radius, pi);

function circumCalc(radius, pi){
	var circ = (radius * 2) * pi;
	return circ
}