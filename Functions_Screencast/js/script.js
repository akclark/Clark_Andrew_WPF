// Andrew K Clark - Screencast Work Along - 27 May 2013

//Basic function structure

/*function functionName(){
	//code the function runs
}
- Curly braces are for blocks of code
- Parenthesis are for parameters
- Functions have names, so we can refer to them later.
*/
function outputMsg(){  //These two blocks of code only set up the function, they do not run it, it needs to be called or invoked.
	console.log("Hello World!");
}

/*function calcArea(){
	var width = 20;
	var length = 30;
	var area = width * length;
	console.log(area);
}*/

//Function Invocation

/*calcArea(); //invokes the calcArea function we set up earlier
calcArea(); //Do NOT forget the parenthesis
calcArea();
*/
//Variable Scope

var width = 5; //This width is scoped to the larger, overall document

function calcArea(){ //The function will always prefer the variable that is scoped inside of itself
	var width = 20; //This width is scoped to calcArea
	var length = 30;
	var area = width * length;
	console.log(area);
}

calcArea(); //invokes the calcArea function we set up earlier
console.log(width);  //This will prefer the variable that is named outside of the function

//Arguments and Parameters

/*funcName(argument1, argument2);

function funcName(parameter1, parameter2){
	//code function runs
}*/

calcArea(30, 20);

function calcArea(w, l){ //w=30, l=20
	var area = w * l;
	console.log(area);
}



function dogYears(age){ //only variable declarations go inside the parenthesis || This is the parameters
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1); //passing the varaible age1 || These are for arguments
dogYears(5); //passing the value 5

