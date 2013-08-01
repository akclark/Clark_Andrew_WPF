//Andrew K. Clark
//31 July 2013
//Functions_Industry

//This function will calculate the number of man hours it takes to wire x number of apartment buildings

var numberOfUnits = prompt("Please enter the number of units in each building");//requesting the first variable input
var numberOfBuildings = prompt("Please enter the number of buildings total for the project.");//requesting the second variable input
var numberOfManHours = prompt("Please enter the number of man hours it take to wire one unit.");//requesting the third variable input

var totalManHours = manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings);//function invocation, including arguments













//Function Section

function manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings) {//function setup, including 3 parameters
    var totalManHours = numberOfBuildings * numberOfManHours * numberOfUnits;//calculation
    return totalManHours;//returning the value from the function
}








