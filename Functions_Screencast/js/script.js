// Andrew K Clark - Screencast Work Along - 27 May 2013

//Anonymous Functions

/*
- Also called closures
- They are functions that are created as the code is run

*/

function functionName(){ //normal function setup
}


var functionName = function(){ //anonymous function setup
	//code to run
}

functionName();
//|||||||||||||||||||||||||||||||||||||||||||||

//Anonymous functions must be defined before they can be invoked
//Named functions do not, they are 'hoisted', which means they are created before the code is run

var calcArea = function(width, length){
	var area = width * length;
	return area;
}

var a = calcArea(20, 30);

console.log(a);

//Anonymous is for code brevity, and variable scoping control