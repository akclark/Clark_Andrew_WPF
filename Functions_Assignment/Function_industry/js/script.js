//Andrew K. Clark
//31 July 2013
//Functions_Industry

//This function will calculate the number of man hours it takes to wire x number of apartment buildings

var numberOfUnits = prompt("Please enter the number of units in each building");//requesting the first variable input
var firstTrue = isNaN(numberOfUnits);// set up a variable to hold isnan's true or false

if (firstTrue == true) {// checking to see if it is a number
    var numberOfUnits = prompt("Please enter a number here.");//if not asking for one again
}//end statement

var numberOfBuildings = prompt("Please enter the number of buildings total for the project.");//requesting the second variable input
var numberOfManHours = prompt("Please enter the number of man hours it take to wire one unit.");//requesting the third variable input



var totalManHours = manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings);//function invocation, including arguments

console.log("You will need to plan for a total of " + totalManHours + " man hours for your project.");//the required console.log output

var hoursPerBuilding = function(totalManHours, numberOfBuildings){//defining the anonymous function
    var total = totalManHours / numberOfBuildings;//the calc
    return total;//returning the value
}//end statement

var totalPerBuilding = hoursPerBuilding(totalManHours, numberOfBuildings);//calling the anonymous function

console.log("As a side note it will take " + totalPerBuilding + " number of man hours to complete one building.");//a miscelaneous output to justify the anonymous function











//Function Section

function manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings) {//function setup, including 3 parameters
    var totalManHours = numberOfBuildings * numberOfManHours * numberOfUnits;//calculation
    return totalManHours;//returning the value from the function
}








