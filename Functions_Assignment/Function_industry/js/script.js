//Andrew K. Clark
//31 July 2013
//Functions_Industry

//This function will calculate the number of man hours it takes to wire x number of apartment buildings

var numberOfUnits = prompt("Please enter the number of units in each building");//requesting the first variable input
var numberOfBuildings = prompt("Please enter the number of buildings total for the project.");//requesting the second variable input
var numberOfManHours = prompt("Please enter the number of man hours it take to wire one unit.");//requesting the third variable input

var totalManHours = manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings);//function invocation, including arguments

console.log("You will need to plan for a total of " + totalManHours + " man hours for your project.");//the required console.log output

var hoursPerBuilding = function(totalManHours, numberOfBuildings){
    var total = totalManHours / numberOfBuildings;
    return total;
}

var totalPerBuilding = hoursPerBuilding(totalManHours, numberOfBuildings);

console.log("As a side note it will take " + totalPerBuilding + " number of man hours to complete one building.");











//Function Section

function manHourCalc(numberOfUnits, numberOfManHours, numberOfBuildings) {//function setup, including 3 parameters
    var totalManHours = numberOfBuildings * numberOfManHours * numberOfUnits;//calculation
    return totalManHours;//returning the value from the function
}








