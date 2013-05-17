// Andrew K Clark - 05/16/2013 - Expressions Personal

var phoneBills = []
phoneBills[0] = prompt("This will total and average the last 6 months worth of your landline or cell phone bills.\nOr any other bill that repeats on a monthly basis. \nPlease enter the amount of the first bill:");
phoneBills[1] = prompt("Please enter the second bill amount:");
phoneBills[2] = prompt("Please enter the third bill amount:");
phoneBills[3] = prompt("Please enter the fourth bill  amount:");
phoneBills[4] = prompt("Please enter the fifth bill amount:");
phoneBills[5] = prompt("And please enter the sixth and final bill amount:");

var billsTotal = phoneBills[0] + phoneBills[1] + phoneBills[2] + phoneBills[3] + phoneBills[4] + phoneBills[5];
var billsAverage = billsTotal / 6;




