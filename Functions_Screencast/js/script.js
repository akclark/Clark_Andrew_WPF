//Andrew K. Clark
//31 July 2013
//Functions - Screencast work along.

//Intro to Functions

//Functions store stuff like variables do, however variables store values, while functions store blocks of code.
//Functions allow you to have the code in one place and run that code as many times as you want.

//Basic function structure:

function functionName () {
    //code the function runs
}
//parenthesis are for parameters
//functions have names so we can refer to them later

function outputMsg() {
    console.log("Hello World!");
}

function calcArea() {
    var width = 20;
    var length = 30;
    var area = width * length;
    console.log(area);
}

//Function Invocation - Telling the function to run

calcArea();//This says to run the function 
calcArea();
calcArea();

//Variable scope - the function will always prefer the variables that occur inside of the function

var width = 5;

function calcArea() {
    var width = 20;
    var length = 30;
    var area = width * length;
    console.log(area);
}

calcArea();

//Arguments and parameters

funcName(argument1, argument2);//argument is the information being passed in

function funcName(parameter1, parameter2) {//parameter is the container for the information within the function
    //code the function runs
}

//calcArea(30, 20);
//
//function calcArea(w, l){
//    var area = w * l;
//    console.log(area);
//}

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is" + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1);
dogYears(5);


//Returning Values - getting values back from a function

var total = calcArea(30, 20);//whatever the function returns, store it in the variable total

function calcArea(w, l){
    var area = w * l;
    return area;// function is spitting the information out
}
console.log(total);

//Functions vs Procedures - functions return values, procedures do not. Ever.

//This is a function
function calcArea(width, length) {
    var area = width * length;
    return area;
}

//This is a procedure
function calcArea(width * length) {
    var area = width * length;
    console.log(area); //No return
}

//Anonymous Functions - also called closures - functions created as the code is run

var functionName = function(){
    //code to run
}

functionName();
//////////////////////////////
function calcArea(width, length) {
    var area = width * length;
    return area;
}

var calcArea = function(width, length){//defining
    var area = width * length;
    return area;
}

var a = calcArea(20, 30);//invoking

console.log(a);

//anonymous function have to be declared before they are called

















